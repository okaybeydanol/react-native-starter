import {useState} from 'react';

// Types
import {UseLoadingReturn} from './types';

/**
 * Custom hook to manage loading state.
 *
 * @param {boolean} initialState - The initial loading state (default: true).
 * @returns {UseLoadingReturn} - An object containing:
 *   - `isLoading` (boolean): The current loading state.
 *   - `startLoading` (function): A function to set loading to `true`.
 *   - `stopLoading` (function): A function to set loading to `false`.
 */
const useLoading = (initialState: boolean = true): UseLoadingReturn => {
  // State to track the loading status
  const [isLoading, setIsLoading] = useState(initialState);

  // Function to set the loading state to true
  const startLoading = () => setIsLoading(true);

  // Function to set the loading state to false
  const stopLoading = () => setIsLoading(false);

  // Return the loading state and control functions
  return {isLoading, startLoading, stopLoading};
};

export default useLoading;
