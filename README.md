# React Native Starter Project

This is a React Native starter project to kickstart development with a clean, reusable structure and best practices.

## Scripts Explanation

This project includes several scripts to clean and reset the environment. Below is a breakdown of each script:

- **`purge:js`**  
  Cleans JavaScript dependencies by removing `node_modules`, `package-lock.json`, and `yarn.lock`. Also resets the npm/yarn cache and temporary Metro/haste files.

- **`purge:android`**  
  Stops the Gradle daemon and removes Android build cache, Gradle caches, and other related files.

- **`purge:ios`**  
  Cleans iOS build artifacts, CocoaPods cache, Podfile lock, and Xcode DerivedData. Also resets all iOS simulators and clears the CocoaPods cache.

- **`purge:gem`**  
  Removes Ruby gem dependencies, Gemfile lock, and clears outdated gems.

- **`purge:install`**  
  Reinstalls all dependencies with `yarn`, installs Ruby gems via `bundle install`, and sets up CocoaPods for the iOS project.

- **`purge`**  
  Runs all purge scripts in sequence (`purge:js`, `purge:android`, `purge:ios`, `purge:gem`) and then reinstalls the dependencies using `purge:install`.

---

This file will be updated as the project evolves.