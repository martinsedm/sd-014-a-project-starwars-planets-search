import { useContext } from 'react';
import SWContext from '../context/SWContext';

/**
 * useNumericValue - Hook to get the numericValue from SWProvider
 * @returns {Object} - numericValue
 * @example
 * const { numericValue } = useNumericValueInput();
 * console.log(numericValue);
 * // []
 */
const useNumericValue = () => {
  const { numericValue, setNumericValue } = useContext(SWContext);
  return { numericValue, setNumericValue };
};

export default useNumericValue;
