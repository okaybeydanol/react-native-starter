const fs = require('fs');
const path = require('path');

console.log('Import Sorter is starting...');

function sortImports(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf-8');
    const lines = content.split('\n');

    const importLines = [];
    const codeLines = [];

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i].trim();

      if (line === '') {
        if (codeLines.length > 0) {
          codeLines.push(lines[i]);
        }
        continue;
      }

      if (
        line.startsWith('import ') ||
        (line.startsWith('export ') && line.includes(' from '))
      ) {
        let fullImport = lines[i];
        let j = i + 1;

        while (j < lines.length && !fullImport.includes(';')) {
          fullImport += '\n' + lines[j];
          j++;
        }

        importLines.push(fullImport);
        i = j - 1;
      } else {
        codeLines.push(lines[i]);
      }
    }

    if (importLines.length === 0) {
      return;
    }

    const parsedImports = [];
    for (const importLine of importLines) {
      let importPath = '';

      const fromMatch = importLine.match(/from\s+['"](.+?)['"]/);
      if (fromMatch) {
        importPath = fromMatch[1];
      } else {
        const directMatch = importLine.match(/import\s+['"]([^'"]+)['"]/);
        if (directMatch) {
          importPath = directMatch[1];
        }
      }

      if (!importPath) {
        continue;
      }

      let importType = 'external';

      if (importPath === 'react' || importPath === 'react-native') {
        importType = 'builtin';
      } else if (
        /^@(app|components|constants|hooks|i18n|navigation|store|query|theme|types|utils|features|helpers|assets)(?:\/|$)/i.test(
          importPath,
        )
      ) {
        importType = 'internal';
      } else if (importPath.startsWith('../')) {
        importType = 'parent';
      } else if (importPath.startsWith('./')) {
        if (importPath === './' || importPath.includes('./index')) {
          importType = 'index';
        } else {
          importType = 'sibling';
        }
      }

      parsedImports.push({
        statement: importLine,
        path: importPath,
        type: importType,
        sortValue: importPath.toLowerCase(),
      });
    }

    const importGroups = {
      builtin: parsedImports.filter(imp => imp.type === 'builtin'),
      external: parsedImports.filter(imp => imp.type === 'external'),
      internal: parsedImports.filter(imp => imp.type === 'internal'),
      parent: parsedImports.filter(imp => imp.type === 'parent'),
      sibling: parsedImports.filter(imp => imp.type === 'sibling'),
      index: parsedImports.filter(imp => imp.type === 'index'),
    };

    importGroups.builtin.sort((a, b) => {
      const aIsReact = a.path === 'react';
      const bIsReact = b.path === 'react';

      if (aIsReact && !bIsReact) {
        return -1;
      }
      if (!aIsReact && bIsReact) {
        return 1;
      }
      return a.sortValue.localeCompare(b.sortValue);
    });

    ['external', 'internal', 'parent', 'sibling', 'index'].forEach(key => {
      importGroups[key].sort((a, b) => a.sortValue.localeCompare(b.sortValue));
    });

    const importSections = [];

    const groupConfigs = [
      {key: 'builtin', title: '// React & React Native'},
      {key: 'external', title: '// Third-Party Libraries'},
      {key: 'internal', title: '// Internal Imports (Absolute)'},
      {key: 'parent', title: '// Parent Directory Imports (Relative)'},
      {key: 'sibling', title: '// Sibling Directory Imports (Relative)'},
      {key: 'index', title: '// Index Imports'},
    ];

    for (const config of groupConfigs) {
      const group = importGroups[config.key];

      if (group.length === 0) {
        continue;
      }
      importSections.push(config.title);
      for (const imp of group) {
        importSections.push(imp.statement);
      }

      const nextGroups = groupConfigs
        .slice(groupConfigs.findIndex(g => g.key === config.key) + 1)
        .filter(g => importGroups[g.key].length > 0);

      if (nextGroups.length > 0) {
        importSections.push('');
      }
    }

    let cleanCode = codeLines.join('\n').trim();
    cleanCode = cleanCode.replace(/\n{3,}/g, '\n\n');

    let newContent = '';
    if (importSections.length > 0 && cleanCode) {
      newContent = importSections.join('\n') + '\n\n' + cleanCode;
    } else if (importSections.length > 0) {
      newContent = importSections.join('\n');
    } else {
      newContent = cleanCode;
    }

    fs.writeFileSync(filePath, newContent + '\n', 'utf-8');
    console.log(`Processed: ${filePath}`);
  } catch (error) {
    console.error(`File processing error ${filePath}:`, error.message);
  }
}

function processSingleFile(filePath) {
  if (!fs.existsSync(filePath)) {
    console.error(`File not found: ${filePath}`);
  }

  if (
    filePath.endsWith('.ts') ||
    filePath.endsWith('.tsx') ||
    filePath.endsWith('.js') ||
    filePath.endsWith('.jsx')
  ) {
    try {
      sortImports(filePath);
    } catch (error) {
      console.error(`File processing error ${filePath}:`, error.message);
    }
  } else {
    console.error(`Unsupported file type: ${filePath}`);
  }
}

function walkDir(dir) {
  try {
    if (!fs.existsSync(dir)) {
      console.error(`Directory not found: ${dir}`);
      return 0;
    }

    let processedCount = 0;
    fs.readdirSync(dir).forEach(file => {
      const fullPath = path.join(dir, file);

      if (fs.statSync(fullPath).isDirectory()) {
        processedCount += walkDir(fullPath);
      } else if (
        fullPath.endsWith('.ts') ||
        fullPath.endsWith('.tsx') ||
        fullPath.endsWith('.js') ||
        fullPath.endsWith('.jsx')
      ) {
        try {
          sortImports(fullPath);
          processedCount++;
        } catch (error) {
          console.error(`File processing error ${fullPath}:`, error.message);
        }
      }
    });

    return processedCount;
  } catch (error) {
    console.error(`Directory scan error ${dir}:`, error.message);
    return 0;
  }
}

if (require.main === module) {
  try {
    const targetPath = process.argv[2];

    if (!targetPath) {
      console.error(
        '\x1b[31mError: You must specify a file or folder path!\x1b[0m',
      );
      process.exit(1);
    } else {
      if (fs.existsSync(targetPath)) {
        if (fs.statSync(targetPath).isDirectory()) {
          console.log(`Processing folder: ${targetPath}`);
          const count = walkDir(targetPath);
          console.log(`Total ${count} file processed successfully.`);
        } else {
          console.log(`Processing file: ${targetPath}`);
          processSingleFile(targetPath);
          console.log('The file was processed successfully.');
        }
      } else {
        console.error(`\x1b[31mTarget not found: ${targetPath}\x1b[0m`);
        process.exit(1);
      }
    }
  } catch (error) {
    console.error('An error occurred:', error.message);
    process.exit(1);
  }
}

module.exports = {
  processSingleFile,
  walkDir,
};
