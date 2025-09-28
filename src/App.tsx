// React & React Native
import React from 'react';
import { StyleSheet } from 'react-native';

// Third-Party Libraries
import { QueryClientProvider } from '@tanstack/react-query';
import { ErrorBoundary } from 'react-error-boundary';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

// Internal Imports (Absolute)
import GenericView from '@components/ui/GenericView';
import AppNavigator from '@navigation/AppNavigator';
import { queryClient } from '@query/client';

const Fallback = ({ error }: Readonly<{ error: any }>) => {
  console.error('Error Boundary Caught:', error);
  return <GenericView ns="global" tKey="errorBoundary" />;
};

const App = (): React.JSX.Element => {
  return (
    <ErrorBoundary FallbackComponent={Fallback}>
      <GestureHandlerRootView style={styles.container} testID="app-root">
        <QueryClientProvider client={queryClient}>
          <AppNavigator />
        </QueryClientProvider>
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
