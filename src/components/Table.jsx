import React, { useContext, useEffect } from 'react';
import PlanetContext from '../context/Context';
import Row from './Row';

export default function Table() {
  const { planets, fetchPlanets, filters } = useContext(PlanetContext);

  useEffect(() => {
    fetchPlanets();
  });

  const filterNames = () => {
    if (filters.filterByName.name) {
      return planets.filter(
        ({ name }) => name.toLowerCase().includes(filters.filterByName.name),
      );
    }
    return planets;
  };

  return (
    <table>
      <thead>
        <tr>
          {Object.keys(planets[0]).map((key) => (
            <th key={ key }>
              {key}
            </th>))}
        </tr>
      </thead>
      <tbody>
        <Row planets={ filterNames() } />
      </tbody>
    </table>// componentizando as linhas com o component rows do Rod
  );
}
