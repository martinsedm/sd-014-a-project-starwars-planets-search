import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';

const NEGATIVE = -1;

const sortOptions = (a, b, order) => {
  const { column, sort } = order;
  const aValue = Number.isNaN(Number(a[column]))
    ? a[column] : Number(a[column]);
  const bValue = Number.isNaN(Number(b[column]))
    ? b[column] : Number(b[column]);
  if (sort === 'ASC') {
    return aValue > bValue ? 1 : NEGATIVE;
  }
  return aValue < bValue ? 1 : NEGATIVE;
};

function Table() {
  const { planets, loading, filters } = useContext(PlanetsContext);
  const {
    filters: {
      filterByName: { name },
      filterByNumericValues: numericValues,
      order,
    },
  } = filters;
  const filterByName = (planet) => planet.name.toLowerCase().includes(name.toLowerCase());

  const filterByNumericValues = (planet) => numericValues.reduce(
    (acc, { column, comparison, value }) => {
      if (acc === false) return false;
      const selectedColumn = Number(planet[column]);
      const valueNumber = Number(value);
      switch (comparison) {
      case 'maior que':
        return selectedColumn > valueNumber;
      case 'menor que':
        return selectedColumn < valueNumber;
      case 'igual a':
        return selectedColumn === valueNumber;
      default:
        return false;
      }
    }, true,
  );

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Rotation Period</th>
          <th>Orbital Period</th>
          <th>Diameter</th>
          <th>Climate</th>
          <th>Gravity</th>
          <th>Terrain</th>
          <th>Surface Water</th>
          <th>Population</th>
          <th>Films</th>
          <th>Created</th>
          <th>Edited</th>
          <th>URL</th>
        </tr>
      </thead>
      <tbody>
        {loading || planets.length === 0 ? <tr><td>Loading...</td></tr>
          : planets.filter(filterByName)
            .filter(filterByNumericValues)
            .sort((a, b) => sortOptions(a, b, order))
            .map((planet) => (
              <tr key={ planet.name }>
                <td data-testid="planet-name">{planet.name}</td>
                <td>{planet.rotation_period}</td>
                <td>{planet.orbital_period}</td>
                <td>{planet.diameter}</td>
                <td>{planet.climate}</td>
                <td>{planet.gravity}</td>
                <td>{planet.terrain}</td>
                <td>{planet.surface_water}</td>
                <td>{planet.population}</td>
                <td>{planet.films}</td>
                <td>{planet.created}</td>
                <td>{planet.edited}</td>
                <td>{planet.url}</td>
              </tr>
            ))}
      </tbody>
    </table>
  );
}

export default Table;
