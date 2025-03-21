import React from 'react';
import {StyleSheet} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

// Query
import {QueryClientProvider} from '@tanstack/react-query';
import {queryClient} from '@query/client';

// Navigation
import AppNavigator from '@navigation/AppNavigator';

const App = (): React.JSX.Element => {
  return (
    <GestureHandlerRootView style={styles.container} testID="app-root">
      <QueryClientProvider client={queryClient}>
        <AppNavigator />
      </QueryClientProvider>
    </GestureHandlerRootView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
