const fs = require('fs');
const path = require('path');

const getSourceFileFromTest = () => {
  const testArg = process.argv.find(arg => /\.test\.(ts|tsx)$/.test(arg));
  if (!testArg) {
    return null;
  }
  const testPath = path.resolve(testArg);
  const dirname = path.dirname(testPath);
  const basename = path.basename(testPath);
  const sourceBasename = basename.replace(/(\.test|\.spec)(\.(ts|tsx))$/, '$2');
  const projectRoot = process.cwd();
  const pathAfterTests = dirname.split('__tests__')[1];
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
};

module.exports = getSourceFileFromTest;
