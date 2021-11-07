import React from 'react';
import PropTypes from 'prop-types';
import Loading from './Loading';

function Table({ planets, headers }) {
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
  headers: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Table;
