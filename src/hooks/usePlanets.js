import { useContext } from 'react';
import SWContext from '../context/SWContext';

/**
 * usePlanets - Hook to get the planets from SWProvider
 * @returns {Object} - planets
 * @example
 * const { planets } = usePlanets();
 * console.log(planets);
 * // [{}, {}, {}]
 * @example
 * const { planets } = usePlanets();
 * console.log(planets.length);
 * // 3
 * @example
 * const { planets } = usePlanets();
 * console.log(planets[0].name);
 * // 'Tatooine'
 */
const usePlanets = () => {
  const { planets, setPlanets } = useContext(SWContext);
  return { planets, setPlanets };
};

export default usePlanets;
