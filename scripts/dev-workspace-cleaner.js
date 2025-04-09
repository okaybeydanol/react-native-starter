// Node.js Core Modules
const {execSync} = require('child_process');
const fs = require('fs');
const os = require('os');

// ANSI Color Codes
const colors = {
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  red: '\x1b[31m',
  blue: '\x1b[34m',
  cyan: '\x1b[36m',
  reset: '\x1b[0m',
};

// Default configuration - all operations enabled
const config = {
  js: true,
  ios: true,
  android: true,
  simulator: true,
  emulator: true,
  gem: true,
  install: true,
  jest: true,
};

// Check if running on macOS
const isMac = process.platform === 'darwin';
if (!isMac) {
  console.log(
    `${colors.red}Error: This script is designed to run only on macOS.${colors.reset}`,
  );
  process.exit(1);
}

/**
 * Print section header with blue color
 * @param {string} message - Section header text
 */
function printSection(message) {
  console.log(`\n${colors.blue}=== ${message} ===${colors.reset}`);
}

/**
 * Execute a command and print the result
 * @param {string} command - Command to execute
 * @returns {boolean} - Whether the command was successful
 */
function runCommand(command) {
  console.log(`${colors.yellow}Running:${colors.reset} ${command}`);

  try {
    execSync(command, {stdio: 'inherit'});
    console.log(`${colors.green}✓ Success${colors.reset}`);
    return true;
  } catch (error) {
    console.log(
      `${colors.red}✗ Failed${colors.reset} (${error.message.trim()})`,
    );
    return false;
  }
}

/**
 * Show usage information and exit
 */
function showUsage() {
  console.log(
    `${colors.cyan}Usage:${colors.reset} node dev-workspace-cleaner [options]`,
  );
  console.log('');
  console.log('Options:');
  console.log('  jest       Clean Jest cache');
  console.log('  vscode     Clean VSCode workspace cache');
  console.log('  simulator  Clean iOS Simulator');
  console.log('  emulator   Clean Android Emulator');
  console.log('  js         Clean JavaScript dependencies');
  console.log('  android    Clean Android build files');
  console.log('  ios        Clean iOS build files');
  console.log('  gem        Clean Ruby gems');
  console.log('  install    Reinstall dependencies');
  console.log('');
  console.log('Flags:');
  console.log('  -withoutVirtualDevices  Skip simulator and emulator cleaning');
  console.log('  -h, --help              Show this help information');
  console.log('');
  console.log('Examples:');
  console.log(
    '  node dev-workspace-cleaner              # Run all purge operations',
  );
  console.log(
    '  node dev-workspace-cleaner js ios       # Only clean JavaScript and iOS',
  );
  console.log(
    '  node dev-workspace-cleaner js ios install # Clean JavaScript, iOS and reinstall dependencies',
  );
  console.log(
    '  node dev-workspace-cleaner -withoutVirtualDevices # Run all operations except simulator and emulator cleaning',
  );
  process.exit(1);
}

/**
 * Process command line arguments
 */
function processArgs() {
  const args = process.argv.slice(2);

  if (args.includes('-h') || args.includes('--help')) {
    showUsage();
  }

  if (args.includes('-withoutVirtualDevices')) {
    config.simulator = false;
    config.emulator = false;
    return;
  }

  if (args.length > 0) {
    // If arguments are provided, disable all operations by default
    Object.keys(config).forEach(key => {
      config[key] = false;
    });

    // Enable only the specified operations
    args.forEach(arg => {
      if (config.hasOwnProperty(arg)) {
        config[arg] = true;
      } else {
        console.log(`${colors.red}Unknown option: ${arg}${colors.reset}`);
        showUsage();
      }
    });
  }
}

/**
 * Clean JavaScript dependencies
 */
function cleanJS() {
  if (!config.js) {
    return;
  }

  printSection('Cleaning JavaScript Dependencies');

  runCommand('rm -rf node_modules package-lock.json yarn.lock coverage .idea');

  runCommand('npm cache clean --force');
  runCommand('yarn cache clean');

  const tmpDir = os.tmpdir();
  runCommand(
    `rm -rf ${tmpDir}/metro-* ${tmpDir}/haste-* ${tmpDir}/yarn-* ${os.homedir()}/Library/Caches/Yarn ~/.npm`,
  );
}

/**
 * Clean iOS build files
 */
function cleanIOS() {
  if (!config.ios) {
    return;
  }

  printSection('Cleaning iOS Build Files');
  runCommand(
    'rm -rf ios/Pods ios/Podfile.lock ios/build \
    ~/Library/Caches/CocoaPods \
    ~/Library/Developer/Xcode/DerivedData \
    ~/Library/Developer/CoreSimulator/Caches \
    ~/Library/Developer/Xcode/Archives \
    ~/Library/Developer/Xcode/Products \
    ~/Library/Developer/Xcode/iOS\\ DeviceSupport',
  );

  runCommand('pod cache clean --all');
}

/**
 * Clean Android build files
 */
function cleanAndroid() {
  if (!config.android) {
    return;
  }

  printSection('Cleaning Android Build Files');

  // Stop Gradle daemon
  if (fs.existsSync('android')) {
    runCommand('cd android && ./gradlew --stop && cd ..');
  }

  // Remove build files
  runCommand(
    'rm -rf android/.gradle android/.kotlin android/build android/app/build android/app/.cxx',
  );

  // Clean gradle caches
  const homeDir = os.homedir();
  runCommand(
    `rm -rf ${homeDir}/.gradle/caches/ ${homeDir}/.gradle/daemon ${homeDir}/.gradle/native ${homeDir}/.gradle/wrapper ${homeDir}/Library/Application\\ Support/AndroidStudio`,
  );
}

/**
 * Clean iOS Simulator
 */
function cleanSimulator() {
  if (!config.simulator) {
    return;
  }

  printSection('Cleaning iOS Simulator');
  runCommand('xcrun simctl shutdown all');
  runCommand('killall Simulator 2>/dev/null || true');
  runCommand('xcrun simctl erase all');
}

/**
 * Clean Android Emulator
 */
function cleanEmulator() {
  if (!config.emulator) {
    return;
  }

  printSection('Cleaning Android Emulator');

  runCommand(
    "adb devices | grep emulator | awk '{print $1}' | xargs -I {} adb -s {} emu kill || true",
  );

  runCommand('sleep 2');

  const homeDir = os.homedir();
  runCommand(
    `rm -rf ${homeDir}/.android/avd/*/snapshots ${homeDir}/.android/avd/*/cache.img ${homeDir}/.android/avd/*/cache.img.qcow2 ${homeDir}/.android/avd/*/userdata*.img ${homeDir}/.android/avd/*/userdata-qemu.img ${homeDir}/.android/cache /tmp/android-${
      os.userInfo().username
    }`,
  );
}

/**
 * Clean Ruby gems
 */
function cleanGem() {
  if (!config.gem) {
    return;
  }

  printSection('Cleaning Ruby Gems');

  runCommand('rm -rf Gemfile.lock vendor/* ~/.gem');

  runCommand('gem cleanup');
}

/**
 * Reinstall dependencies
 */
function reinstallDependencies() {
  if (!config.install) {
    return;
  }

  printSection('Reinstalling Dependencies');
  runCommand('yarn install');

  if (fs.existsSync('ios')) {
    runCommand('cd ios && bundle install && bundle exec pod install && cd ..');
  }
}

/**
 * Clean Jest cache
 */
function cleanJest() {
  if (!config.jest) {
    return;
  }

  printSection('Cleaning Jest Cache');
  runCommand('jest --clearCache');

  const tmpDir = os.tmpdir();
  runCommand(`rm -rf ${tmpDir}/jest*`);
}

/**
 * Print summary of executed operations
 */
function printSummary() {
  printSection('Purge Operations Summary');
  console.log(`${colors.green}Purge operations completed for:${colors.reset}`);

  if (config.jest) {
    console.log(' • Jest Cache');
  }
  if (config.vscode) {
    console.log(' • VSCode Workspace');
  }
  if (config.simulator) {
    console.log(' • iOS Simulator');
  }
  if (config.emulator) {
    console.log(' • Android Emulator');
  }
  if (config.js) {
    console.log(' • JavaScript Dependencies');
  }
  if (config.android) {
    console.log(' • Android Build Files');
  }
  if (config.ios) {
    console.log(' • iOS Build Files');
  }
  if (config.gem) {
    console.log(' • Ruby Gems');
  }
  if (config.install) {
    console.log(' • Dependency Reinstallation');
  }

  console.log('');
  console.log(
    `${colors.cyan}To see available options: ${colors.reset}node dev-workspace-cleaner --help`,
  );
}

/**
 * Main execution function
 */
function main() {
  console.log(
    `${colors.cyan}🧹 Development Environment Cleanup Utility${colors.reset}`,
  );
  processArgs();

  cleanJS();
  cleanIOS();
  cleanAndroid();
  cleanSimulator();
  cleanEmulator();
  cleanGem();
  reinstallDependencies();
  cleanJest();

  printSummary();
}

// Start execution
main();
