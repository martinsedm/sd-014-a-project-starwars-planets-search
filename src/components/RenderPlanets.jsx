import PropTypes from 'prop-types';
import React from 'react';

function RenderPlanets(props) {
  const { planets, filter } = props;

  const filteredPlanets = planets.filter((planet) => (planet
    .name.toLowerCase().includes(filter
      .filterByName.name.toLowerCase())));

  const trueFilter = filter.filterByNumericValues
    .length > 0 ? ((filteredPlanets.filter((planet) => {
      const a = filter.filterByNumericValues.map((value) => {
        if (value.comparison === 'maior que') {
          return planet[value.column] > Number(value.value);
        }
        if (value.comparison === 'menor que') {
          return planet[value.column] < Number(value.value);
        }
        return planet[value.column] === value.value;
      });
      if (a[0] === true) return planet;
      return false;
    }))) : filteredPlanets;

  return (
    <table>
      <thead>
        <tr>
          {Object.keys(planets[0]).map((key) => (
            <th key={ key }>{key.replace('_', ' ').toUpperCase()}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {trueFilter.map((planet) => (
          <tr key={ planet.name }>
            {Object.values(planet).map((value) => (
              <td key={ value }>{value}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

RenderPlanets.propTypes = {
  filter: PropTypes.shape({
    filterByName: PropTypes.shape({
      name: PropTypes.shape({
        toLowerCase: PropTypes.func,
      }),
    }),
  }),
  planets: PropTypes.shape({
    filter: PropTypes.func,
  }),
}.isRequired;

export default RenderPlanets;
