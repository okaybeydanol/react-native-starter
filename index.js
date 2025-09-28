// React & React Native
import { AppRegistry } from 'react-native';

// Internal Imports (Absolute)
import App from '@app';
import '@i18n/i18n';

// Sibling Directory Imports (Relative)
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => App);
