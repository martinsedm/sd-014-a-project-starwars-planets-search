import { useContext } from 'react';
import SWContext from '../context/SWContext';

/**
 * useName - Hook to get the name from SWProvider
 * @returns {Object} - name
 * @example
 * const { name } = useName();
 * console.log(name);
 * // 'Tatooine'
 */
const useName = () => {
  const { name, setName } = useContext(SWContext);
  return { name, setName };
};

export default useName;
