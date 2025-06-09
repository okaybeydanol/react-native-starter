# React Native Starter Template

This React Native Starter Template provides a solid foundation for mobile app development. Designed for developers, it includes modern tools, reusable components, and essential integrations to help you quickly start your next project.

## Core Features

- **Navigation System**: Built with [React Navigation](https://reactnavigation.org/) for seamless routing and navigation - nested stack and tab navigations with fully configured navigation types.
- **Internationalization**: [react-i18next](https://react.i18next.com/) integration offering easy localization and instant language switching.
- **Theme Support**: Pre-configured dark and light themes with system preference integration and dynamic theme switching.
- **State Management**: [Zustand](https://github.com/pmndrs/zustand) and [TanStack Query](https://tanstack.com/query/latest) for efficient state and API management - lightweight state management with powerful data fetching capabilities.
- **Type Safety**: Full type safety with TypeScript - comprehensive type definitions for navigations, API responses, and state stores.
- **Code Quality Tools**: Code quality checks and formatting with [ESLint](https://eslint.org/), [Prettier](https://prettier.io/), and TypeScript.
- **Project Structure**: Well-organized, component-based project structure for easier maintenance and development.
- **Powerful Scripts**: Various helper scripts to accelerate development process, code cleanliness, and organization.
- **Ready-to-Use Components**: Library of UI components with theme integration.
- **Testing Infrastructure**: Testing infrastructure with [Jest](https://jestjs.io/) and [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/).

---

## Project Structure

Here's an overview of the project structure:

```markdown
src/
├── App.tsx                     # Main React component (with TanStack Provider and navigation)
├── assets/                     # Static assets used throughout the app
│   ├── fonts/                  # Custom font files for typography
│   └── images/                 # Visual resources like logos and icons
├── components/                 # Reusable UI components organized by feature
│   ├── settings/               # Components related to settings screens
│   ├── svgs/                   # SVG icon components
│   ├── tab/                    # Components specific to tab screen
│   ├── tabbar/                 # Custom TabBar navigation component
│   └── ui/                     # General UI components (GlobalHeader, etc.)
├── constants/                  # App-wide constants
│   ├── dimensions.ts           # Device size values and calculations
│   ├── localization.ts         # Localization-related constants
│   ├── navigationConfig.ts     # Navigation configuration options
│   ├── regex.ts                # Regular expression patterns for validation
│   └── urls.ts                 # API endpoints and resource URLs
├── helpers/                    # Helper functions and utilities
│   ├── getSvg.tsx              # SVG component helper functions
│   ├── systemLocale.ts         # System locale detection helper
│   └── types.ts                # Type definitions for helper functions
├── hooks/                      # Custom React hooks
│   ├── useAppTheme.ts          # Hook for accessing and changing app themes
│   └── useHomeUsers.tsx        # Hook for fetching and managing user data
├── i18n/                       # Internationalization setup and translations
│   ├── i18n.ts                 # i18n configuration and initialization
│   └── locales/                # Translation files organized by language
├── navigation/                 # Navigation setup and configuration
│   ├── AppNavigator.tsx        # Root navigator with theme setup
│   ├── HomeNavigator.tsx       # Home screen stack navigator
│   ├── MainNavigator.tsx       # Main app navigator controlling flow
│   ├── SplashNavigator.tsx     # Splash screen navigator
│   ├── TabNavigator.tsx        # Bottom tab navigator configuration
│   └── types.ts                # Navigation type definitions and parameters
├── query/                      # Query and state management
│   ├── api/                    # API endpoint definitions
│   ├── client.ts               # Query client configuration
│   ├── queries/                # Query hooks for data fetching
│   └── store/                  # State management store
├── screens/                    # Application screens organized by feature
│   ├── settings/               # Settings-related screens
│   ├── splash/                 # Splash/startup screen
│   └── tab/                    # Tab-based main screens
├── theme/                      # Theming setup and definitions
│   ├── dark.ts                 # Dark theme color palette and settings
│   ├── light.ts                # Light theme color palette and settings
│   └── types.ts                # Theme type definitions
├── types/                      # Global type definitions
│   ├── env.d.ts                # Environment variables type definitions
│   ├── i18next.d.ts            # Type extensions for i18next
│   ├── image.d.ts              # Image module declarations for assets
│   ├── navigation.d.ts         # Navigation type extensions
│   └── theme.d.ts              # Theme type extensions
└── utils/                      # Utility functions
    ├── object.ts               # Object manipulation and nested path handling utilities
    ├── string.ts               # String manipulation and localization utilities
    └── types.ts                # Type definitions for utilities
```

---

## React Native Project Setup Guide

### Getting Started

Follow these steps to run the project on your local machine.

### Requirements

Make sure you have the following tools installed:

- Node.js (latest LTS version recommended)
- **Yarn (required package manager)** - All scripts are built around Yarn and won't work properly with npm
- **ESLint and Prettier plugins for your code editor (required)** - React Native has critical dependencies on these tools for code quality and formatting
- Xcode (for iOS development)
- Android Studio (for Android development)

**Important:** Before starting, close any running iOS or Android emulators as well as Android Studio and Xcode.

### Development Environment Setup (macOS)

#### 1. Install Homebrew

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

Add the following to your shell profile; either `~/.profile` or `~/.zshrc:`

```bash
eval "$(/opt/homebrew/bin/brew shellenv)"
```

#### 2. Install Node Version Manager (NVM)

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.2/install.sh | bash
```

Add the following to your shell profile; either `~/.profile` or `~/.zshrc:` - typically it adds automatically but need to verify.

```bash
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # Loads NVM
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # Loads NVM bash completions
```

Install the LTS version:

```bash
nvm install --lts
```

Set as default version:

```bash
nvm alias default lts/*
```

Start using the default version:

```bash
nvm use default
```

Update npm:

```bash
npm install -g npm@latest
```

#### 3. Install Yarn

```bash
npm install --global yarn
```

Check your Node.js, npm, and yarn versions (remember to close and reopen your terminal completely):

```bash
node --version
npm --version
yarn --version
```

#### 4. Setup Ruby Environment

```bash
brew install rbenv
```

Add to your shell profile:
```bash
eval "$(rbenv init - zsh)"
```

Install Ruby with rbenv:
```bash
rbenv install -l
rbenv install 3.4.2
rbenv global 3.4.2
```

#### 5. iOS Development Setup

- Download [Xcode from the App Store](https://itunes.apple.com/us/app/xcode/id497799835?mt=12)
- Install CocoaPods:
  ```bash
  gem install cocoapods
  ```

Check version:
```bash
pod --version
```

#### 6. Android Development Setup

- Install Java 17:
  ```bash
  brew install --cask zulu@17
  ```

- Add to your shell profile:
  ```bash
  export JAVA_HOME=/Library/Java/JavaVirtualMachines/zulu-17.jdk/Contents/Home
  ```

- Download [Android Studio](https://developer.android.com/studio)
- During Android Studio Setup Wizard, ensure the following are selected:
  - Android SDK
  - Android SDK Platform
  - Android Virtual Device

- Configure Android SDK:
  - Open SDK Manager, select SDK Platforms
  - Check "Show Package Details"
  - Select Android 15 (VanillaIceCream) components
  - In SDK Tools, ensure Android SDK Build-Tools 35.0.0 is selected

- Add to your shell profile:
  ```bash
  export ANDROID_HOME=$HOME/Library/Android/sdk
  export PATH=$PATH:$ANDROID_HOME/emulator
  export PATH=$PATH:$ANDROID_HOME/platform-tools
  ```

#### 7. Visual Studio Code Setup
- Download [Visual Studio Code](https://code.visualstudio.com/)
- Install required extensions:
  - [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
  - [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

### Project Setup

#### 1. Clone the Repository

```bash
git clone https://github.com/okaybeydanol/react-native-starter.git
cd react-native-starter
```

#### 2. Install Dependencies

```bash
yarn install
```

#### 3. Choose Project Architecture Branch

Select one of the following project architecture branches based on your needs:

```bash
# Component-based architecture with Redux Toolkit and RTK Query
git checkout component-based-redux-toolkit-rtk-query

# Feature-based architecture with Redux Toolkit and RTK Query
git checkout feature-based-redux-toolkit-rtk-query

# Component-based architecture with Zustand and TanStack Query
git checkout component-based-zustand-tanstack-query
```

#### 4. Configure Git User Information

Before proceeding with the rename script, ensure your Git user information is correctly configured. This is especially important if you use different Git credentials for different repositories or if your Git user information is not configured globally.

```bash
# Configure Git user for this repository (optional but recommended)
git config user.name "Your Name"
git config user.email "your.email@example.com"
```

**Note:** If you skip this step and your Git user information is not configured globally, the rename script may fail during the commit process.

#### 5. Configure Project Name

1. Update the project name in `package.json`
2. Update the project name in `app.json`

#### 6. Project Setup Options

Choose one of the following options:

**Option 1: Clean Project** - Remove sample content while keeping infrastructure **(Not Recommended)**

**This removes all sample content from the template but preserves the core infrastructure. Please read the note below before deciding.**

```bash
yarn wipe-example-data
```

**Note:** This option removes the built-in navigation hierarchy system that manages navigation between tabs and stack screens. The built-in navigation structure contains optimized patterns for screen transitions where tab bars should not be shown. Without this structure, you'll need to manually rebuild navigation containers for proper screen management. The template includes a professionally configured navigation system that follows React Navigation's recommended patterns for performance and maintenance.

**Option 2: Rename Project** - Keep sample content but change app name **(Recommended)**

```bash
yarn rename
```

This preserves all the sample content but changes the app name in all necessary files, including proper navigation structure.

#### 7. react-native-screens configuration for Android

The `react-native-screens` package requires additional configuration to work properly on Android. Edit the `MainActivity.kt` file located under `android/app/src/main/java/<your package name>/`.

Add this code to the `MainActivity` class body:

```kotlin
class MainActivity: ReactActivity() {
  // ...
  override fun onCreate(savedInstanceState: Bundle?) {
    super.onCreate(null)
  }
  // ...
}
```

And add this import statement at the top of the file below your package statement:

```kotlin
import android.os.Bundle;
```

#### 8. Start the Development Server

```bash
yarn start --reset-cache
```

---

## Import Organization and Automation

ESLint and Prettier configurations can automatically sort import statements, but advanced categorization patterns like `sibling` and `absolute` imports require additional configuration. To ensure professional, readable, and well-organized import statements that align with industry best practices, this project implements a dual-approach system using both ESLint rules and a specialized custom script. While ESLint handles fundamental sorting on auto-save operations, the custom script provides enhanced control with semantic category headers and more precise import organization.

**Architectural Design:** The following configurations ensure reliable and consistent import resolution across the entire codebase:

* **Path Alias Resolution**: TypeScript path aliases (`@app`, `@components`, `@features`, etc.) are primarily resolved through `tsconfig.json` configuration, but the script is designed to work independently if aliasing is modified or unavailable
* **Comprehensive Type Support**: All modern JavaScript and TypeScript file extensions (`.ts`, `.tsx`, `.js`, `.jsx`) are explicitly supported with proper module resolution
* **Absolute Path Configuration**: The `settings.import/resolver` in ESLint configuration guarantees correct resolution of absolute paths throughout the project
   * **Critical Note:** The `typescript.project` setting in your ESLint configuration must be synchronized with the `paths` mapping in `tsconfig.json` to maintain consistency

**Example (Before and After):**

**Before (non-ESLint/Prettier Projects):**

```javascript
import {AppRegistry} from 'react-native';
import App from '@app';
import '@i18n/i18n';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
```

**Before (ESLint/Prettier Projects):**

```javascript
import {AppRegistry} from 'react-native';

import App from '@app';
import '@i18n/i18n';

import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
```

**After (With Script):**

```javascript
// React & React Native
import {AppRegistry} from 'react-native';

// Internal Imports (Absolute)
import App from '@app';
import '@i18n/i18n';

// Sibling Directory Imports (Relative)
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
```

The semantic categorization follows a deliberate architecture:

1. **React & React Native** - Framework imports are prioritized at the top (React, React Native core modules)
2. **Internal Imports (Absolute)** - Application-specific modules using aliased paths for domain functionality
3. **Sibling Directory Imports (Relative)** - Local imports that relate specifically to the current module

This structured approach creates a consistent mental model for developers working with the codebase, making it immediately clear where each import originates from and its relationship to the current file.

**Advanced Utility Implementation:** The project leverages a sophisticated `scripts/import-organizer.js` utility that programmatically analyzes and restructures import statements. This implementation is particularly valuable for maintaining codebase consistency in several scenarios:

1. Environments where ESLint auto-format isn't configured or isn't triggered on save
2. Codebases that require standardized import header documentation
3. Legacy code refactoring where bulk updates are needed
4. CI/CD pipelines that enforce import structure standards

The script operates independently of your chosen architecture template (component-based or feature-based) and executes through Node.js for maximum portability.

**Technical Implementation:** For absolute imports, the script uses a carefully crafted regular expression:

```javascript
/^@(app|components|constants|hooks|i18n|navigation|store|query|theme|types|utils|features|helpers|assets)(?:\/|$)/i
```

This pattern precisely identifies and categorizes module aliases based on your project's architecture, enabling consistent ordering of imports from `@app`, `@components`, `@features`, etc. The regex is designed to capture both direct imports (e.g., `@app`) and nested imports (e.g., `@components/ui/Button`).

**Package.json Script:**

```json
"scripts": {
  "fix:imports": "node scripts/import-organizer.js $1"
}
```

**Implementation Patterns:** The utility supports multiple execution methods to accommodate different development workflows and automation scenarios:

**Direct Node.js Execution:**
```bash
# Process a single entry point file
node scripts/import-organizer.js index.js

# Process an entire feature directory
node scripts/import-organizer.js src/features/authentication

# Process a specific component file
node scripts/import-organizer.js src/components/ui/Button.tsx
```

**Yarn Script Integration:**
```bash
# Process a specific component file
yarn fix:imports src/components/ui/Button.tsx

# Process all source files (bulk operation)
yarn fix:imports src/

# Process multiple targeted paths simultaneously
yarn fix:imports "index.js src/navigation src/features/profile"
```

The script intelligently handles both individual files and recursive directory traversal, automatically detecting and processing all supported file types (`.ts`, `.tsx`, `.js`, `.jsx`) while respecting your project's specific architecture patterns.

---

## Development Environment Cleanup Utility

This project incorporates a sophisticated environment management utility that systematically cleans and resets various development environment components. This advanced tooling is specifically designed to address common React Native development challenges such as corrupted caches, inconsistent build artifacts, and dependency conflicts that often occur across the complex JavaScript/native bridge ecosystem.

### Operational Implementation

The cleanup utility can be invoked through two primary methods, depending on your development workflow and automation requirements:

**Via Yarn Script (Recommended):**
```bash
yarn cache:cleaner [options]
```

**Via Direct Node.js Execution:**
```bash
node scripts/dev-workspace-cleaner.js [options]
```

When executed without specific options, the utility performs a comprehensive cleanup across all development environment components - addressing JavaScript dependencies, native build artifacts, simulator states, and toolchain caches in a single coordinated operation.

### Available Options

- **`jest`**: Cleans Jest cache
- **`vscode`**: Cleans VSCode workspace cache
- **`simulator`**: Cleans iOS Simulator
- **`emulator`**: Cleans Android Emulator
- **`js`**: Cleans JavaScript dependencies
- **`android`**: Cleans Android build files
- **`ios`**: Cleans iOS build files
- **`gem`**: Cleans Ruby gems
- **`install`**: Reinstalls dependencies

### Examples

```bash
# Clean everything
yarn cache:cleaner

# Clean only JavaScript dependencies and iOS build files
yarn cache:cleaner js ios

# Clean JavaScript dependencies, iOS build files, and reinstall dependencies
yarn cache:cleaner js ios install
```

### Cleaning Operations Details

#### JavaScript Dependency Resolution (`js`)
Systematically removes and resets all JavaScript dependency artifacts, package management metadata, and associated caches. This comprehensive module addresses dependency tree inconsistencies, version conflicts, and Metro bundler cache corruption that commonly occur in complex React Native projects.

This specialized operation executes the following technical steps:
- Complete removal of all `node_modules` directories and their nested contents
- Deletion of package manager lock files (`yarn.lock`, `package-lock.json`) to force dependency resolution from source
- Purging of npm and yarn global caches that may contain corrupted package versions
- Targeted cleaning of Metro bundler temporary files that often cause inconsistent bundling behavior
- Elimination of Haste module map caches that can cause import resolution failures

#### Android Cleaning (`android`)
Stops Gradle daemon, removes build files, and cleans Gradle caches. Helps resolve build issues and conflicts in Android projects.

This operation includes:
- Stopping Gradle daemon
- Removing Android build folders
- Cleaning Gradle caches
- Cleaning Android Studio caches

#### iOS Cleaning (`ios`)
Removes pods, build files, and cleans CocoaPods cache. Resolves common iOS build issues, especially after dependency changes.

This operation includes:
- Cleaning iOS Pods folder
- Removing Podfile.lock
- Cleaning iOS build folders
- Cleaning Xcode derived data folders
- Cleaning CocoaPods cache

#### Simulator/Emulator Cleaning (`simulator`/`emulator`)
Resets iOS simulators and Android emulators to a clean state. Useful when testing or when simulator/emulator behavior becomes inconsistent.

This operation includes:
- Resetting iOS simulators
- Shutting down Android emulators
- Cleaning emulator caches and snapshots

#### VSCode Cleaning (`vscode`)
Cleans VSCode workspace caches, which can help resolve persistent IntelliSense issues, errors, and warnings despite code fixes.

This operation includes:
- Cleaning VSCode workspace storage directory

#### Ruby Gems Cleaning (`gem`)
Removes `Gemfile.lock`, vendor directory, and cleans Ruby gems. This helps resolve CocoaPods issues that depend on Ruby.

This operation includes:
- Removing Gemfile.lock
- Cleaning vendor folder
- Cleaning gem caches

#### Dependency Reinstallation (`install`)
Reinstalls all dependencies after cleaning. This ensures your project is in a consistent state after cleaning operations.

This operation includes:
- Reinstalling Yarn dependencies
- Reinstalling pods for iOS

#### Jest Cleaning (`jest`)
Cleans Jest cache to resolve test inconsistencies and failures that might arise from cached test results.

This operation includes:
- Cleaning Jest cache
- Removing Jest temporary files

---

## React Native Project Scripts

This documentation covers all the commands available in your React Native project. These scripts are designed to streamline and standardize your development workflow.

### Basic Commands

- **`start`** Starts the React Native Metro bundler.

  ```bash
  react-native start
  ```

- **`android`** Builds and runs the Android app.

  ```bash
  react-native run-android
  ```

- **`ios`** Builds and runs the iOS app.

  ```bash
  react-native run-ios
  ```

### Testing and Quality Control

- **`test`** Runs the Jest test runner with coverage report and detects open handles.

  ```bash
  jest --coverage --detectOpenHandles
  ```

- **`check:lint`** Runs ESLint for code errors and style issues.

  ```bash
  eslint .
  ```

- **`check:types`** Checks TypeScript types without emitting files.

  ```bash
  tsc --noEmit
  ```

- **`check:all`** Performs both linting and TypeScript checking.

  ```bash
  yarn check:lint && yarn check:types
  ```

### Formatting

- **`fix:lint`** Automatically fixes ESLint issues.

  ```bash
  eslint $1 --fix
  ```

  **IMPORTANT**: The `$1` parameter represents the file or directory path you want to format. Replace this with an actual path when running the command.
  
  **Examples**:
  ```bash
  # Format a specific file
  yarn fix:lint src/components/Button.tsx
  
  # Format a directory
  yarn fix:lint src/screens
  
  # Format the entire src directory
  yarn fix:lint src
  ```

- **`fix:imports`** Sorts import statements using a custom script.

  ```bash
  node scripts/import-organizer.js $1
  ```

  **IMPORTANT**: The `$1` parameter represents the file or directory path you want to process. Replace this with an actual path when running the command.
  
  **Examples**:
  ```bash
  # Sort imports in a specific file
  yarn fix:imports src/components/Button.tsx
  
  # Sort imports in a directory
  yarn fix:imports src/screens
  
  # Sort imports in the entire src directory
  yarn fix:imports src
  
  # Process multiple files or directories at once
  yarn fix:imports index.js tests
  ```

- **`fix:all`** Runs all formatting commands in sequence.

  ```bash
  yarn fix:lint $1 && yarn fix:imports $1
  ```

  **IMPORTANT**: The `$1` parameter represents the file or directory path you want to format. Replace this with an actual path when running the command. This script will run all formatters on the specified path.
  
  **Examples**:
  ```bash
  # Format a specific directory with all formatters
  yarn fix:all src/components
  
  # Format the entire src directory with all formatters
  yarn fix:all src
  
  # Format multiple files or directories at once
  yarn fix:all "src/components src/screens"
  ```

### Git Workflow

- **`precommit`** Runs before commits to ensure code quality.

  ```bash
  yarn check:all && yarn fix:all $1
  ```

### Project Setup

- **`rename`** Rebuilds local project files and cleans caches.

  ```bash
  rm -rf ios android .git && npx react-native eject && yarn cache:cleaner && git init && git add . && git commit -m 'Initial commit'
  ```

- **`clean`** Removes sample content and renames the project.

  ```bash
  node scripts/project-structure-refiner.js && yarn rename
  ```

### Project Scripts

The project includes a curated selection of scripts designed to streamline common development workflows and ensure code quality and consistency. These scripts are integrated through the `package.json` configuration and can be executed via Yarn.

#### Development Scripts

```json
{
  "scripts": {
    "start": "react-native start",
    "android": "react-native run-android",
    "ios": "react-native run-ios",
    "test": "jest --coverage --detectOpenHandles",
    "check:lint": "eslint .",
    "check:types": "tsc --noEmit",
    "check:all": "yarn check:lint && yarn check:types",
    "fix:lint": "eslint --fix $1",
    "fix:imports": "node scripts/import-organizer.js $1",
    "fix:all": "yarn fix:lint $1 && yarn fix:imports $1",
    "precommit": "yarn check:all && yarn fix:all $1",
    "cache:cleaner": "node scripts/dev-workspace-cleaner.js $*",
    "rename": "rm -rf ios android .git && npx react-native eject && yarn dev-workspace-cleaner && git init && git add . && git commit -m 'Initial commit'",
    "wipe-example-data": "node scripts/project-structure-refiner.js && yarn rename"
  }
}
```

### Core Development Commands

- **`start`**: Launches the React Native Metro bundler development server
- **`android`**: Builds and runs the application on Android emulator or connected device
- **`ios`**: Builds and runs the application on iOS simulator or connected device

### Quality Assurance

- **`test`**: Executes Jest test suite with coverage reporting and detection of open handles
- **`check:lint`**: Performs static code analysis using ESLint to identify potential issues
- **`check:types`**: Verifies TypeScript type correctness without generating output files
- **`check:all`**: Comprehensive quality check combining linting and type verification

### Code Maintenance

- **`fix:lint`**: Automatically corrects ESLint-identifiable issues in target files or directories
- **`fix:imports`**: Organizes and structures import statements according to project conventions
- **`fix:all`**: Applies all automated code quality improvements in sequence
- **`precommit`**: Pre-commit hook that ensures code quality before Git commits

### Project Setup and Maintenance

- **`cache:cleaner`**: Invokes the development environment cleanup utility with specified options
- **`rename`**: Performs a clean project rebuild including native code regeneration
- **`clean`**: Restructures project by removing sample content and executing rename process

---

### Customization

To further customize the template:

1. Modify or add components, hooks, and utilities in their respective folders.
2. Update the theme in the `theme` folder.
3. Adjust navigation in the `navigation` folder.
4. Integrate additional libraries as needed.

---

### Feedback and Contributions

We welcome your feedback and contributions! Feel free to open an issue or submit a pull request on [GitHub](https://github.com/okaybeydanol/react-native-starter).

---

This documentation will be updated as the project evolves.