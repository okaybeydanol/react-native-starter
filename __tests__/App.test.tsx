import App from '@App';
import {cleanup, render} from '@testing-library/react-native';
import React from 'react';

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
