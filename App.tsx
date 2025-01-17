import React from 'react';
import {Provider} from 'react-redux';

// Navigation
import Navigation from './src/routes';

// Store
import {store} from '@store/index';

const App = () => {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
};

export default App;
