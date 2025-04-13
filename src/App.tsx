// React & React Native
import React from 'react';
import {StyleSheet} from 'react-native';

// Third-Party Libraries
import {QueryClientProvider} from '@tanstack/react-query';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

// Internal Imports (Absolute)
import {STATUS_BAR_HEIGHT} from '@constants/dimensions';
import AppNavigator from '@navigation/AppNavigator';
import {queryClient} from '@query/client';

const App = (): React.JSX.Element => {
  return (
    <GestureHandlerRootView
      style={[styles.container, {paddingTop: STATUS_BAR_HEIGHT}]}
      testID="app-root">
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
