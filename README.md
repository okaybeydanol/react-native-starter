

# React Native Starter Template

This React Native Starter Template provides a solid foundation to streamline mobile app development. Designed for developers, it includes modern tools, reusable components, and essential integrations to jumpstart your next project.

## Key Features

- **Navigation System**: Built with React Navigation for seamless routing and navigation.
- **Internationalization**: Includes `react-i18next` for multi-language support, allowing easy localization and translation.
- **Theming**: Pre-configured dark and light themes with dynamic switching support.
- **State Management**: Utilizes Redux Toolkit and Redux API Middleware for efficient state and API management.
- **Reusable Hooks**: Custom hooks to simplify common React Native patterns.
- **Pre-styled UI Components**: Includes pre-designed UI components with theming support.
- **Customizable Structure**: Easy to rename and adapt to project-specific needs with provided scripts.

---

## Project Structure

Here’s an overview of the project structure:

```
components/
├── Svgs/
│   ├── Tab/         # Contains SVG components for the TabBar
├── Tab/
│   ├── Home/        # Components specific to the Home screen
│   │   ├── Header/  # Header section of the Home screen
│   │   ├── Main/    # Main content section of the Home screen
└── TabBar/          # Custom TabBar navigation component

constants/
├── index.ts         # General constants
├── navigationConfig.ts # Navigation-related constants
└── urls.ts          # API and resource URLs

helpers/
├── svg.tsx          # SVG helper functions
└── types.ts         # Utility types

hooks/
├── types.ts         # Hook-related types
└── useLoading.ts    # Custom hook for loading state management

i18n/
├── locales/         # Translation files
│   │   ├── en/      # English language files
│   │   ├── tr/      # Turkish language files
└── index.ts         # i18n configuration

routes/
├── index.tsx        # Root navigator
├── main.tsx         # Main app navigator
├── splash.tsx       # Splash screen navigator
├── tab.tsx          # Tab navigator
└── types.ts         # Navigation types

screens/
├── Splash/          # Splash screen
└── Tab/
│   ├── Home/        # Home screen
│   └── Profile/     # Profile screen

store/
├── api/             # API slice setup
│   ├── index.ts
│   ├── middleware.ts
│   └── types.ts
├── slices/          # Redux slices
│   ├── theme.ts     # Theme slice
│   └── user.ts      # User slice
├── index.ts         # Combines reducers and sets up the store
└── types.ts         # Types for Redux and Redux API

theme/
├── dark.ts          # Dark theme configuration
├── light.ts         # Light theme configuration
└── types.ts         # Theme-related types

types/
├── i18next.d.ts     # i18n types
└── theme.d.ts       # Theme types

utils/
└── types.ts         # Global utility types
```

---

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

3. **Rename the Project** 
**Important:** Update the project name in `package.json` and `app.json`. Then run:

   ```bash
   npm run rename
   ```

   This script cleans existing platform folders and re-initializes them:

   ```bash
   rm -rf ios android && npx react-native eject && npx react-native-asset && npm run purge
   ```

5. **Start the Development Server**

   ```bash
   yarn start
   ```

---

## Android Configuration for react-native-screens

The `react-native-screens` package requires additional configuration on Android to work properly. Edit the `MainActivity.kt`  file located under `android/app/src/main/java/<your package name>/`.

Add the following code to the body of the `MainActivity` class:

```
class MainActivity: ReactActivity() {
  // ...
  override fun onCreate(savedInstanceState: Bundle?) {
    super.onCreate(null)
  }
  // ...
}
```
and make sure to add the following import statement at the top of this file below your package statement:

```
import android.os.Bundle;
```


## Purge Scripts

To ensure a clean development environment, the template includes comprehensive purge scripts:

- **`purge:js`** Cleans JavaScript dependencies and related caches.

  ```bash
  rm -rf node_modules package-lock.json yarn.lock && npm cache clean --force && yarn cache clean && rm -rf $TMPDIR/metro-* $TMPDIR/haste-* ~/Library/Caches/Yarn
  ```

- **`purge:android`** Clears Gradle caches and Android build artifacts.

  ```bash
  (cd android && ./gradlew --stop) && rm -rf ~/.gradle/caches/ ~/.gradle/daemon ~/.gradle/native ~/.gradle/wrapper android/app/build
  ```

- **`purge:ios`** Removes iOS build artifacts, clears CocoaPods cache, and resets simulators.

  ```bash
  rm -rf ios/Pods/* ios/Podfile.lock ios/build ~/Library/Caches/CocoaPods ~/Library/Developer/Xcode/DerivedData && xcrun simctl erase all && pod cache clean --all
  ```

- **`purge:gem`** Cleans Ruby gem dependencies and outdated gems.

  ```bash
  rm -rf Gemfile.lock vendor/* ~/.gem && gem cleanup
  ```

- **`purge:install`** Reinstalls all dependencies, including Ruby gems and iOS pods.

  ```bash
  yarn install && cd ios && bundle install && bundle exec pod install
  ```

- **`purge`** Runs all purge scripts sequentially.

  ```bash
  npm run purge:js && npm run purge:android && npm run purge:ios && npm run purge:gem && npm run purge:install
  ```

---

## Customization

To further customize the template:

1. Modify or add components, hooks, and utilities in their respective folders.
2. Update theming in the `theme` folder.
3. Adjust navigation in the `routes` folder.
4. Integrate additional libraries as needed.

---

## Feedback and Contributions

We welcome your feedback and contributions! Feel free to open an issue or submit a pull request on [GitHub](https://github.com/okaybeydanol/react-native-starter).

---

This documentation will be updated as the project evolves.