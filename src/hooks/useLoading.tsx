import {useState} from 'react';

// Types
import {UseLoadingReturn} from './types';

/**
 * Custom hook to manage and update the loading state.
 *
 * @param {boolean} initialState - Specifies the initial loading state (default: true).
 * @returns {UseLoadingReturn} - An object containing:
 *   - `isLoading` (boolean): Represents the current loading status.
 *   - `setLoading` (function): Updates the loading state to either `true` or `false`.
 */
const useLoading = (initialState: boolean = true): UseLoadingReturn => {
  // State to track the loading status
  const [isLoading, setIsLoading] = useState(initialState);

  // Function to set the loading state to true or false
  const setLoading = (status: boolean) => setIsLoading(status);

  // Return the loading state and control functions
  return {isLoading, setLoading};
};

export default useLoading;
