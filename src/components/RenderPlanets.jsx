import PropTypes from 'prop-types';
import React from 'react';

function RenderPlanets(props) {
  const { planets } = props;
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
        {planets.map((planet) => (
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
  planets: PropTypes.shape({
    map: PropTypes.func,
  }),
}.isRequired;

export default RenderPlanets;
