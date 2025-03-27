# React Native Starter Template

This React Native Starter Template provides a solid foundation to streamline mobile app development. Designed for developers, it includes modern tools, reusable components, and essential integrations to jumpstart your next project.

## Key Features

- **Navigation System**: Built with React Navigation for seamless routing and navigation.
- **Internationalization**: Includes `react-i18next` for multi-language support, allowing easy localization and translation.
- **Theming**: Pre-configured dark and light themes with dynamic switching support.
- **State Management**: Utilizes Redux Toolkit and Redux API Middleware for efficient state and API management.
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
├── screens/                    # Application screens organized by feature
│   ├── settings/               # Settings-related screens
│   ├── splash/                 # Splash/launch screen
│   └── tab/                    # Tab-based main screens
├── store/                      # Redux store setup and state management
│   ├── api/                    # RTK Query API definitions
│   ├── slices/                 # Redux Toolkit slices for state management
│   ├── rootReducer.ts          # Combines all reducers
│   ├── store.ts                # Store configuration with persist setup
│   └── types.ts                # Type definitions for store state
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
- Yarn (preferred package manager)
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

3. **Configure Project Name**

   1. Update the project name in `package.json`
   2. Update the project name in `app.json`

4. **Project Setup Options**
   Choose one of the following options:

   **Option 1: Clean Project** - Remove example content while keeping infrastructure

   ```bash
   yarn clean
   ```

   This removes all example content from the template but keeps the basic infrastructure.

   **Option 2: Rename Project** - Keep example content but change app name

   ```bash
   yarn rename
   ```

   This keeps all example content but changes the application name in all necessary files.

5. **Android Configuration for react-native-screens**
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

6. **Start the Development Server**

   ```bash
   yarn start
   ```

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
  rm -rf ios android .git && npx react-native eject && yarn purge
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