import React from 'react';
import PropTypes from 'prop-types';
import Loading from './Loading';

const filterByNumericValuesFunction = (planets, filters) => {
  let filteredPlanets = planets;
  filters.forEach(({ column, comparison, value }) => {
    switch (comparison) {
    case 'maior que':
      filteredPlanets = filteredPlanets.filter((planet) => (
        Number(planet[column]) > Number(value)));
      break;
    case 'igual a':
      filteredPlanets = filteredPlanets.filter((planet) => (
        Number(planet[column]) === Number(value)));
      break;
    case 'menor que':
      filteredPlanets = filteredPlanets.filter((planet) => (
        Number(planet[column]) < Number(value)));
      break;
    default:
      return null;
    }
  });
  return filteredPlanets;
};

function Table({ planets, headers, filters }) {
  return planets.length < 1 ? <Loading /> : (
    <table>
      <thead>
        <tr>
          {
            headers.map((header) => (
              header !== 'residents' ? <th key={ header }>{header}</th> : null
            ))
          }
        </tr>
      </thead>
      <tbody>
        {
          filterByNumericValuesFunction(planets, filters).map((planet) => (
            <tr key={ planet.name }>
              {
                Object.values(planet).map((info, index) => (
                  index === 0 ? (
                    <td key={ index } data-testid="planet-name">
                      {info}
                    </td>
                  ) : (
                    <td key={ index }>
                      {info}
                    </td>
                  )
                ))
              }
            </tr>
          ))
        }
      </tbody>
    </table>
  );
}

Table.propTypes = {
  planets: PropTypes.arrayOf(PropTypes.object).isRequired,
  headers: PropTypes.arrayOf(PropTypes.string).isRequired,
  filters: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Table;
