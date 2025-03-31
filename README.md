# React Native Starter Template

This React Native Starter Template provides a solid foundation to streamline mobile app development. Designed for developers, it includes modern tools, reusable components, and essential integrations to jumpstart your next project.

## Key Features

- **Navigation System**: Built with React Navigation for seamless routing and navigation.
- **Internationalization**: Includes `react-i18next` for multi-language support, allowing easy localization and translation.
- **Theming**: Pre-configured dark and light themes with dynamic switching support using Zustand.
- **State Management**: Utilizes Zustand for client-side state and Tanstack Query for server-side state and API management.
- **Customizable Structure**: Easy to rename and adapt to project-specific needs with provided scripts.

---

## Project Structure

Here’s an overview of the project structure:

```markdown
src/
├── App.tsx                     # Root React component with Redux Provider and navigation
├── assets/                     # Static assets used throughout the application
│   ├── fonts/                  # Custom font files for typography
│   └── images/                 # Image resources like logos and icons
├── components/                 # Reusable UI components organized by feature
│   ├── settings/               # Components related to settings screens
│   ├── svgs/                   # SVG icon components
│   ├── tab/                    # Tab screen-specific components
│   ├── tabbar/                 # Custom TabBar navigation component
│   └── ui/                     # Generic UI components (GlobalHeader, etc.)
├── constants/                  # Application-wide constants
│   ├── dimensions.ts           # Device dimension values and calculations
│   ├── localization.ts         # Localization-related constants
│   ├── navigationConfig.ts     # Navigation configuration options
│   ├── regex.ts                # Regular expression patterns for validation
│   └── urls.ts                 # API endpoints and resource URLs
├── helpers/                    # Helper functions and utilities
│   ├── getSvg.tsx              # SVG component helper functions
│   ├── systemLocale.ts         # System locale detection helper
│   └── types.ts                # Type definitions for helper functions
├── hooks/                      # Custom React hooks
│   ├── useAppTheme.ts          # Hook for accessing and switching app themes
│   └── useHomeUsers.tsx        # Hook for fetching and managing user data
├── i18n/                       # Internationalization setup and translations
│   ├── i18n.ts                 # i18n configuration and initialization
│   └── locales/                # Translation files organized by language
├── navigation/                 # Navigation setup and configuration
│   ├── AppNavigator.tsx        # Root navigator with theme setup
│   ├── HomeNavigator.tsx       # Home screen stack navigator
│   ├── MainNavigator.tsx       # Main app navigator that controls flow
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
│   ├── splash/                 # Splash/launch screen
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
    └── types.ts                # Type definitions for utility functions
```

---

# React Native Project Setup Guide

## Getting Started

Follow these steps to get the project running on your local machine.

### Prerequisites

Ensure the following tools are installed:

- Node.js (latest LTS version recommended)
- **Yarn (required package manager)** - All scripts are built around Yarn and will not work properly with npm
- **ESLint and Prettier plugins for your code editor (required)** - React Native has critical dependencies on these tools for code quality and formatting
- Xcode (for iOS development)
- Android Studio (for Android development)

**Important:** Close any running iOS or Android emulators as well as Android Studio and Xcode before starting.

### Installation

1. **Clone the Repository**

   ```bash
   git clone https://github.com/okaybeydanol/react-native-starter.git
   cd react-native-starter
   ```

2. **Install Dependencies**

   ```bash
   yarn install
   ```

3. **Select Project Architecture Branch**

   Choose one of the following project architecture branches based on your requirements:

   ```bash
   # For component-based architecture with Redux Toolkit and RTK Query
   git checkout component-based-redux-toolkit-rtk-query
   
   # For feature-based architecture with Redux Toolkit and RTK Query
   git checkout feature-based-redux-toolkit-rtk-query
   
   # For component-based architecture with Zustand and TanStack Query
   git checkout component-based-zustand-tanstack-query
   ```

4. **Configure Git User Information**

   Before proceeding with the rename script, ensure your Git user information is configured correctly. This is especially important if you're using different Git credentials for different repositories or if Git user information isn't configured globally.

   ```bash
   # Configure Git user for this repository (optional but recommended)
   git config user.name "Your Name"
   git config user.email "your.email@example.com"
   ```

   **Note:** If you skip this step and don't have Git user information configured globally, the rename script may fail during the commit process.

5. **Configure Project Name**

   1. Update the project name in `package.json`
   2. Update the project name in `app.json`

6. **Project Setup Options**
   Choose one of the following options:

   **Option 1: Clean Project** - Remove example content while keeping infrastructure **(Not Recommended)**

   **This removes all example content from the template but keeps the basic infrastructure. Please read the note below before making your decision.**
   
   ```bash
   yarn clean
   ```

   **Note:** This option removes the established navigation hierarchy system, including the best practice structure that manages navigation between tabs and stack screens. The built-in navigation structure includes optimized patterns for screen transitions where tab bars should not be displayed. Without this structure, you would need to manually recreate navigation containers for proper screen management. The template includes a professionally configured navigation system that follows React Navigation's recommended patterns for performance and maintainability.

   **Option 2: Rename Project** - Keep example content but change app name **(Recommended)**

   ```bash
   yarn rename
   ```

   This keeps all example content but changes the application name in all necessary files, including proper navigation structure.

7. **Android Configuration for react-native-screens**
   The `react-native-screens` package requires additional configuration on Android to work properly. Edit the `MainActivity.kt` file located under `android/app/src/main/java/<your package name>/`.

   Add the following code to the body of the `MainActivity` class:

   ```kotlin
   class MainActivity: ReactActivity() {
     // ...
     override fun onCreate(savedInstanceState: Bundle?) {
       super.onCreate(null)
     }
     // ...
   }
   ```

   And make sure to add the following import statement at the top of this file below your package statement:

   ```kotlin
   import android.os.Bundle;
   ```

8. **Start the Development Server**

   ```bash
   yarn start --reset-cache
   ```

---

## Import Ordering and Automation

ESLint and Prettier configurations can automatically sort imports, but special categorization like `sibling` and `absolute` requires additional setup. To maintain readable and well-organized imports following company standards, this project uses both ESLint and a custom script. While ESLint handles basic sorting on auto-save, the custom script provides more control with category headers.

**How It Works:** These configurations ensure proper import resolution:

* TypeScript path aliases (`@app`, `@components`, etc.) are resolved through `tsconfig.json` if present, but the script works independently if needed
* Supported file extensions (`.ts`, `.tsx`, `.js`, `.jsx`) are specified
* `settings.import/resolver`: Ensures proper resolution of absolute paths
   * **Note:** `typescript.project` setting should align with `paths` in `tsconfig.json`

**Example (Before and After):**

**Before (Projects without ESLint/Prettier):**

```javascript
import {AppRegistry} from 'react-native';
import App from '@app';
import '@i18n/i18n';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
```

**Before (Projects with ESLint/Prettier):**

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

**Script Usage:** The project includes a `scripts/sort-imports.js` file to automatically sort imports. This script is ideal for those not using ESLint or wanting to add standard headers. It works across all three templates (regardless of file/folder structure) and runs via Node.

**Regex:** For absolute imports: `/^@(app|components|constants|hooks|i18n|navigation|store|query|theme|types|utils|features|helpers|assets)(?:\/|$)/i` - This identifies and sorts aliases like `@app`, `@components`, etc.

**Package.json Script:**

```json
"scripts": {
  "format:imports": "node scripts/sort-imports.js $1"
}
```

**Usage Examples:** **You can use it as both node and script.**
* Single file: `node scripts/sort-imports.js index.js`
* Folder (specific): `node scripts/sort-imports.js src/component/profile` (scans all files)
* Single file (specific): `yarn format:imports src/component/profile/ProfileContent.tsx`
* Folder (general): `yarn format:imports src/` (scans all files)

---

# React Native Project Scripts

This documentation covers all available commands in your React Native project. These scripts are designed to streamline and standardize your development workflow.

## Core Commands

- **`start`** Starts the React Native Metro bundler.

  ```bash
  react-native start
  ```

- **`android`** Builds and runs the Android application.

  ```bash
  react-native run-android
  ```

- **`ios`** Builds and runs the iOS application.

  ```bash
  react-native run-ios
  ```

## Testing & Quality Control

- **`test`** Runs tests with Jest test runner with coverage report and detects any open handles.

  ```bash
  jest --coverage --detectOpenHandles
  ```

- **`lint`** Runs ESLint to check code for errors and style issues.

  ```bash
  eslint .
  ```

- **`ts:check`** Checks TypeScript types without emitting files.

  ```bash
  tsc --noEmit
  ```

- **`validate`** Runs both linting and TypeScript checking.

  ```bash
  yarn lint && yarn ts:check
  ```

## Formatting

- **`format:eslint`** Fixes ESLint issues automatically.

  ```bash
  eslint $1 --fix
  ```

  **IMPORTANT**: Requires a path parameter.

- **`format:prettier`** Formats code using Prettier.

  ```bash
  prettier --write "$1/**/*.{js,jsx,ts,tsx,json}"
  ```

  **IMPORTANT**: Requires a path parameter.

- **`format:imports`** Sorts import statements using a custom script.

  ```bash
  node scripts/sort-imports.js $1
  ```

  **IMPORTANT**: Requires a path parameter.

- **`format`** Runs all formatting commands in sequence.

  ```bash
  yarn format:eslint $1 && yarn format:prettier $1 && yarn format:imports $1
  ```

  **IMPORTANT**: Requires a path parameter.

## Git Workflow

- **`precommit`** Runs before commits to ensure code quality.

  ```bash
  yarn format && yarn validate
  ```

## Project Setup

- **`rename`** Regenerates native project files and purges caches.

  ```bash
  rm -rf ios android .git && npx react-native eject && yarn purge && git init && git add . && git commit -m 'Initial commit'
  ```

- **`clean`** Placeholder for custom cleaning operation.

  ```bash
  node scripts/clean.js && yarn rename
  ```

## Cache & Dependencies Management

- **`purge:js`** Cleans JavaScript-related caches and dependencies.

  ```bash
  rm -rf node_modules package-lock.json yarn.lock && npm cache clean --force && yarn cache clean && rm -rf $TMPDIR/metro-* $TMPDIR/haste-* ~/Library/Caches/Yarn
  ```

- **`purge:android`** Cleans Android build files and Gradle caches.

  ```bash
  (cd android && ./gradlew --stop) && rm -rf ~/.gradle/caches/ ~/.gradle/daemon ~/.gradle/native ~/.gradle/wrapper android/app/build
  ```

- **`purge:ios`** Cleans iOS build files, pods, and caches.

  ```bash
  rm -rf ios/Pods/* ios/Podfile.lock ios/build ~/Library/Caches/CocoaPods ~/Library/Developer/Xcode/DerivedData ~/Library/Developer/CoreSimulator/Caches && pod cache clean --all
  ```

- **`purge:gem`** Cleans Ruby gems and their caches.

  ```bash
  rm -rf Gemfile.lock vendor/* ~/.gem && gem cleanup
  ```

- **`purge:install`** Reinstalls all dependencies after purging.

  ```bash
  yarn install && cd ios && bundle install && bundle exec pod install
  ```

- **`purge`** Performs a complete cleanup and reinstallation of all dependencies.

  ```bash
  yarn purge:js && yarn purge:android && yarn purge:ios && yarn purge:gem && yarn purge:install && yarn start --reset-cache
  ```

---

## Customization

To further customize the template:

1. Modify or add components, hooks, and utilities in their respective folders.
2. Update theming in the `theme` folder.
3. Adjust navigation in the `navigation` folder.
4. Integrate additional libraries as needed.

---

## Feedback and Contributions

We welcome your feedback and contributions! Feel free to open an issue or submit a pull request on [GitHub](https://github.com/okaybeydanol/react-native-starter).

---

This documentation will be updated as the project evolves.