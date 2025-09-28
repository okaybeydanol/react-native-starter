// React & React Native
import React from 'react';
import { StyleSheet } from 'react-native';

// Third-Party Libraries
import { ErrorBoundary } from 'react-error-boundary';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

// Internal Imports (Absolute)
import GenericView from '@components/ui/GenericView';
import AppNavigator from '@navigation/AppNavigator';
import { persistor, store } from '@store/store';

const Fallback = ({ error }: Readonly<{ error: any }>) => {
  console.error('Error Boundary Caught:', error);
  return <GenericView ns="global" tKey="errorBoundary" />;
};

const App = (): React.JSX.Element => {
  return (
    <ErrorBoundary FallbackComponent={Fallback}>
      <GestureHandlerRootView style={styles.container} testID="app-root">
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <AppNavigator />
          </PersistGate>
        </Provider>
      </GestureHandlerRootView>
    </ErrorBoundary>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
