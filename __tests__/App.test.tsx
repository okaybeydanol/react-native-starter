// React & React Native
import React from 'react';

// Third-Party Libraries
import {cleanup, render} from '@testing-library/react-native';

// Internal Imports (Absolute)
import App from '@app';

afterEach(() => {
  cleanup();
  jest.clearAllMocks();
});

describe('App Component', () => {
  it('renders the navigation component', () => {
    const {getByTestId} = render(<App />);
    expect(getByTestId('app-root')).toBeTruthy();
  });
});
