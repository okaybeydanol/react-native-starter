const fs = require('fs');
const path = require('path');

const getSourceFileFromTest = () => {
  try {
    const testArg = process.argv.find(arg => /\.test\.(ts|tsx)$/.test(arg));
    if (!testArg) {
      console.warn('No test file specified in arguments');
      return null;
    }

    const testPath = path.resolve(testArg);
    const dirname = path.dirname(testPath);

    // __tests__ klasörünün varlığını kontrol et
    if (!dirname.includes('__tests__')) {
      console.error('Test path does not contain __tests__ directory');
      return null;
    }

    const basename = path.basename(testPath);
    const sourceBasename = basename.replace(
      /(\.test|\.spec)(\.(ts|tsx))$/,
      '$2',
    );
    const projectRoot = process.cwd();
    const pathAfterTests = dirname.split('__tests__')[1] || '';
    const sourcePath = path.join(
      projectRoot,
      'src',
      pathAfterTests,
      sourceBasename,
    );

    if (!fs.existsSync(sourcePath)) {
      console.error(`Source file not found at: ${sourcePath}`);
      return null;
    }

    return path.relative(process.cwd(), sourcePath);
  } catch (error) {
    console.error(`Error finding source file: ${error.message}`);
    return null;
  }
};
module.exports = getSourceFileFromTest;
