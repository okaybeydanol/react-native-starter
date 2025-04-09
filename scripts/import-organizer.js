// Node.js Core Modules
const fs = require('fs');
const path = require('path');

// ANSI Color Codes for better terminal output
const colors = {
  reset: '\x1b[0m',
  bright: '\x1b[1m',
  dim: '\x1b[2m',
  underscore: '\x1b[4m',
  blink: '\x1b[5m',
  reverse: '\x1b[7m',
  hidden: '\x1b[8m',

  black: '\x1b[30m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  magenta: '\x1b[35m',
  cyan: '\x1b[36m',
  white: '\x1b[37m',

  bgBlack: '\x1b[40m',
  bgRed: '\x1b[41m',
  bgGreen: '\x1b[42m',
  bgYellow: '\x1b[43m',
  bgBlue: '\x1b[44m',
  bgMagenta: '\x1b[45m',
  bgCyan: '\x1b[46m',
  bgWhite: '\x1b[47m',
};

// Import Group Configuration
const importGroupConfig = [
  {
    key: 'builtin',
    title: '// React & React Native',
    pattern: /^(react|react-native)$/,
  },
  {
    key: 'external',
    title: '// Third-Party Libraries',
    pattern:
      /^(?!react$|react-native$|@(app|assets|components|constants|hooks|i18n|navigation|store|query|screens|theme|types|utils|features|helpers))([a-z][\w-]+)$/,
  },
  {
    key: 'internal',
    title: '// Internal Imports (Absolute)',
    pattern:
      /^@(app|components|constants|hooks|i18n|navigation|store|query|screens|theme|types|utils|features|helpers|assets)(?:\/|$)/,
  },
  {
    key: 'parent',
    title: '// Parent Directory Imports (Relative)',
    pattern: /^\.\./,
  },
  {
    key: 'sibling',
    title: '// Sibling Directory Imports (Relative)',
    pattern: /^\.\/(?!index)/,
  },
  {key: 'index', title: '// Index Imports', pattern: /^(\.\/)?index/},
];

// Statistics object for better reporting
const stats = {
  processedFiles: 0,
  skippedFiles: 0,
  modifiedFiles: 0,
  errors: 0,
  startTime: null,
  endTime: null,
};

/**
 * Print a formatted section header
 * @param {string} message - The message to display
 */
const printSection = message => {
  console.log(
    `\n${colors.blue}${colors.bright}=== ${message} ===${colors.reset}`,
  );
};

/**
 * Print a success message
 * @param {string} message - The message to display
 */
const printSuccess = message => {
  console.log(`${colors.green}✓ ${message}${colors.reset}`);
};

/**
 * Print a warning message
 * @param {string} message - The message to display
 */
const printWarning = message => {
  console.log(`${colors.yellow}⚠️ ${message}${colors.reset}`);
};

/**
 * Print an error message
 * @param {string} message - The message to display
 */
const printError = message => {
  console.error(`${colors.red}✗ ${message}${colors.reset}`);
  stats.errors++;
};

/**
 * Print a info message
 * @param {string} message - The message to display
 */
const printInfo = message => {
  console.log(`${colors.cyan}ℹ ${message}${colors.reset}`);
};

/**
 * Clean previous header comments from content
 * @param {string} content - The file content
 * @returns {string} - Cleaned content
 */
const cleanPreviousHeaders = content => {
  // Convert header patterns to regex pattern-safe strings
  const headerPatterns = importGroupConfig.map(group => group.title);

  let cleanedContent = content;
  for (const pattern of headerPatterns) {
    cleanedContent = cleanedContent.split(pattern).join('');
  }

  return cleanedContent;
};

/**
 * Determine the import type based on import path
 * @param {string} importPath - The import path
 * @returns {string} - The import type
 */
const determineImportType = importPath => {
  for (const group of importGroupConfig) {
    if (group.pattern.test(importPath)) {
      return group.key;
    }
  }
  return 'external'; // Default fallback
};

/**
 * Check if a file should be processed based on its extension
 * @param {string} filePath - Path to the file
 * @returns {boolean} - Whether the file should be processed
 */
const shouldProcessFile = filePath => {
  const fileExtension = path.extname(filePath).toLowerCase();
  const validExtensions = ['.ts', '.tsx', '.js', '.jsx'];
  return validExtensions.includes(fileExtension);
};

/**
 * Check if a directory should be skipped
 * @param {string} dirName - Directory name
 * @returns {boolean} - Whether the directory should be skipped


/**
 * Sort imports in a file
 * @param {string} filePath - Path to the file
 * @returns {boolean} - Whether the file was modified
 */
const sortImports = filePath => {
  try {
    const content = fs.readFileSync(filePath, 'utf-8');
    const cleanedContent = cleanPreviousHeaders(content);

    const hasDeclarationModule = content.includes('declare module');
    if (hasDeclarationModule) {
      return false;
    }

    const lines = cleanedContent.split('\n');

    const importLines = [];
    const codeLines = [];

    // Extract import statements
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
      printWarning(`No imports found in ${filePath}`);
      stats.skippedFiles++;
      return false;
    }

    // Parse imports
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

      const importType = determineImportType(importPath);

      parsedImports.push({
        statement: importLine,
        path: importPath,
        type: importType,
        sortValue: importPath.toLowerCase(),
      });
    }

    // Group imports
    const importGroups = {};
    importGroupConfig.forEach(group => {
      importGroups[group.key] = parsedImports.filter(
        imp => imp.type === group.key,
      );
    });

    // Sort React and React Native first within builtin group
    importGroups.builtin.sort((a, b) => {
      // React must always be at the top
      if (a.path === 'react') {
        return -1;
      }
      if (b.path === 'react') {
        return 1;
      }

      // React Native should be in second place
      if (a.path === 'react-native') {
        return -1;
      }
      if (b.path === 'react-native') {
        return 1;
      }

      // Other Build-in Modules Alphabetic Sort
      return a.sortValue.localeCompare(b.sortValue);
    });

    // Sort other groups alphabetically
    importGroupConfig
      .filter(group => group.key !== 'builtin')
      .forEach(group => {
        if (importGroups[group.key] && importGroups[group.key].length > 0) {
          importGroups[group.key].sort((a, b) =>
            a.sortValue.localeCompare(b.sortValue),
          );
        }
      });

    // Build import sections
    const importSections = [];

    for (const group of importGroupConfig) {
      const imports = importGroups[group.key] || [];

      if (imports.length === 0) {
        continue;
      }

      importSections.push(group.title);
      for (const imp of imports) {
        importSections.push(imp.statement);
      }

      const nextGroups = importGroupConfig
        .slice(importGroupConfig.findIndex(g => g.key === group.key) + 1)
        .filter(g => importGroups[g.key] && importGroups[g.key].length > 0);

      if (nextGroups.length > 0) {
        importSections.push('');
      }
    }

    // Clean and format code
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

    // Ensure final newline
    newContent = newContent + '\n';

    // Only write if content has changed
    if (content !== newContent) {
      fs.writeFileSync(filePath, newContent, 'utf-8');
      stats.modifiedFiles++;
      printSuccess(
        `Imports organized: ${path.relative(process.cwd(), filePath)}`,
      );
      return true;
    } else {
      printInfo(`No changes needed: ${path.relative(process.cwd(), filePath)}`);
      return false;
    }
  } catch (error) {
    printError(`Error processing ${filePath}: ${error.message}`);
    return false;
  }
};

/**
 * Process a single file
 * @param {string} filePath - Path to the file
 * @returns {boolean} - Whether the file was processed successfully
 */
const processSingleFile = filePath => {
  if (!fs.existsSync(filePath)) {
    printError(`File not found: ${filePath}`);
    return false;
  }

  if (!shouldProcessFile(filePath)) {
    printWarning(`Skipped unsupported file type: ${filePath}`);
    stats.skippedFiles++;
    return false;
  }

  try {
    stats.processedFiles++;
    return sortImports(filePath);
  } catch (error) {
    printError(`Error processing ${filePath}: ${error.message}`);
    return false;
  }
};

/**
 * Process all files in a directory recursively
 * @param {string} dirPath - Path to the directory
 * @returns {number} - Number of processed files
 */
const walkDir = dirPath => {
  try {
    if (!fs.existsSync(dirPath)) {
      printError(`Directory not found: ${dirPath}`);
      return 0;
    }

    let processedCount = 0;
    const files = fs.readdirSync(dirPath);

    for (const file of files) {
      const fullPath = path.join(dirPath, file);

      try {
        const stat = fs.statSync(fullPath);

        if (stat.isDirectory()) {
          processedCount += walkDir(fullPath);
        } else if (shouldProcessFile(fullPath)) {
          if (sortImports(fullPath)) {
            processedCount++;
          }
        }
      } catch (error) {
        printError(`Error accessing ${fullPath}: ${error.message}`);
      }
    }

    return processedCount;
  } catch (error) {
    printError(`Directory scan error ${dirPath}: ${error.message}`);
    return 0;
  }
};

/**
 * Print summary of the execution
 */
const printSummary = () => {
  stats.endTime = new Date();
  const duration = (stats.endTime - stats.startTime) / 1000;

  printSection('Summary');
  console.log(
    `${colors.cyan}Execution time: ${colors.white}${duration.toFixed(2)}s${
      colors.reset
    }`,
  );
  console.log(
    `${colors.cyan}Files processed: ${colors.white}${stats.processedFiles}${colors.reset}`,
  );
  console.log(
    `${colors.cyan}Files modified: ${colors.white}${stats.modifiedFiles}${colors.reset}`,
  );
  console.log(
    `${colors.cyan}Files skipped: ${colors.white}${stats.skippedFiles}${colors.reset}`,
  );
  console.log(
    `${colors.cyan}Errors encountered: ${colors.white}${stats.errors}${colors.reset}`,
  );

  if (stats.errors > 0) {
    console.log(
      `\n${colors.yellow}⚠️  Completed with ${stats.errors} errors${colors.reset}`,
    );
    return stats.errors;
  } else {
    console.log(`\n${colors.green}✓ Successfully completed${colors.reset}`);
    return 0;
  }
};

/**
 * Show help information
 */
const showHelp = () => {
  console.log(`\n${colors.cyan}${colors.bright}Import Sorter${colors.reset}`);
  console.log(
    'A utility to organize and sort import statements in JavaScript and TypeScript files.\n',
  );

  console.log(`${colors.yellow}Usage:${colors.reset}`);
  console.log(
    `  node ${path.basename(
      process.argv[0],
    )} [options] <path1> [path2] [path3] ...`,
  );

  console.log(`\n${colors.yellow}Options:${colors.reset}`);
  console.log('  -h, --help    Show this help message');

  console.log(`\n${colors.yellow}Examples:${colors.reset}`);
  console.log(
    `  node ${path.basename(process.argv[0])} src/components/Button.tsx`,
  );
  console.log(`  node ${path.basename(process.argv[0])} src/features/auth`);
  console.log(
    `  node ${path.basename(
      process.argv[0],
    )} src/components src/screens src/hooks`,
  );

  console.log(`\n${colors.yellow}Import Group Order:${colors.reset}`);
  importGroupConfig.forEach(group => {
    console.log(
      `  ${colors.green}${group.title.replace('//', '').trim()}${colors.reset}`,
    );
  });
};

/**
 * Main execution function
 */
const main = () => {
  stats.startTime = new Date();
  printSection('Import Sorter');

  try {
    const args = process.argv.slice(2);

    if (args.includes('-h') || args.includes('--help') || args.length === 0) {
      showHelp();
      return args.length === 0 ? 1 : 0;
    }

    // Process each path argument
    for (const arg of args) {
      const targetPath = path.resolve(arg);
      const relativePath = path.relative(process.cwd(), targetPath);

      if (
        !(
          relativePath.startsWith('src/') ||
          relativePath === 'src' ||
          relativePath === 'index.js' ||
          relativePath === '__tests__' ||
          relativePath.startsWith('__tests__/')
        )
      ) {
        printError(
          `Invalid target: ${arg}. Only paths within 'src' directory, index.js, or __tests__ are allowed.`,
        );
        continue;
      }

      if (fs.existsSync(targetPath)) {
        const stat = fs.statSync(targetPath);

        if (stat.isDirectory()) {
          printInfo(`Processing directory: ${arg}`);
          walkDir(targetPath);
        } else if (stat.isFile()) {
          printInfo(`Processing file: ${arg}`);
          processSingleFile(targetPath);
        }
      } else {
        printError(`Target not found: ${arg}`);
      }
    }

    return printSummary();
  } catch (error) {
    printError(`Unhandled error: ${error.message}`);
    return 1;
  }
};

// Run the script if called directly
if (require.main === module) {
  process.exit(main() || 0);
}
