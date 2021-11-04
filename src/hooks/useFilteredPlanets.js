import { useContext } from 'react';
import SWContext from '../context/SWContext';

/**
 * useFilteredPlanets - Hook to get the filteredPlanets from SWProvider
 * @returns {Object} - filteredPlanets
 * @example
 * const { filteredPlanets } = useFilteredPlanets(planets, filters);
 * console.log(filteredPlanets);
 * // [{ name: 'Tatooine', rotation_period: '23', orbital_period: '304', diameter: '10465', climate: 'arid', gravity: '1 standard', terrain: 'desert', surface_water: '1', population: '200000', residents: [], films: [], created: '2014-12-09T13:50:49.641000Z', edited: '2014-12-20T20:58:18.420000Z', url: 'https://swapi.co/api/planets/1/' }]
 */
const useFilteredPlanets = () => {
  const { filteredPlanets, setFilteredPlanets } = useContext(SWContext);
  return { filteredPlanets, setFilteredPlanets };
};

export default useFilteredPlanets;
