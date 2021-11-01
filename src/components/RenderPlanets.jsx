import PropTypes from 'prop-types';
import React from 'react';

function RenderPlanets(props) {
  const { planets, filter } = props;
  const filteredPlanets = planets.filter((planet) => planet
    .name.toLowerCase().includes(filter.filterByName.name.toLowerCase()));
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
        {filteredPlanets.map((planet) => (
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
