import { useContext } from 'react';
import PlanetContext from '../context/PlanetContext';

export default function FilterByName(toFilter) {
  const { searchName } = useContext(PlanetContext);

  return toFilter.filter(({ name }) => name.toLowerCase().includes(searchName));
}
