// React & React Native
import React from 'react';
import {StyleSheet} from 'react-native';

// Third-Party Libraries
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';

// Internal Imports (Absolute)
import AppNavigator from '@navigation/AppNavigator';
import {persistor, store} from '@store/store';

const App = (): React.JSX.Element => {
  return (
    <GestureHandlerRootView style={styles.container} testID="app-root">
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <AppNavigator />
        </PersistGate>
      </Provider>
    </GestureHandlerRootView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
