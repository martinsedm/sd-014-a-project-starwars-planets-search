import { useContext } from 'react';
import SWContext from '../context/SWContext';

/**
 * useOrder - Hook to get the order from SWProvider
 * @returns {Object} - order
 * @example
 * const { order } = useOrderInput();
 * console.log(order);
 * // { column: 'name', sort: 'ASC' }
 */
const useOrder = () => {
  const { order, setOrder } = useContext(SWContext);
  return { order, setOrder };
};

export default useOrder;
