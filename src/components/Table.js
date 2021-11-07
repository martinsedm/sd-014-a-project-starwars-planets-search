import React from 'react';
import PropTypes from 'prop-types';

function Table({ planets }) {
  return (
    <table>
      <thead>
        <tr>
          {
            Object.keys(planets[0]).map((header) => (
              header !== 'residents' ? <th key={ header }>{header}</th> : null
            ))
          }
        </tr>
      </thead>
      <tbody>
        {
          planets.map((planet) => (
            <tr key={ planet.name }>
              {
                Object.values(planet).map((info, index) => (
                  <td key={ index }>
                    {info}
                  </td>
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
};

export default Table;
