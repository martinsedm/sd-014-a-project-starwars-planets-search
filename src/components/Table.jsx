import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import PlanetContext from '../context/PlanetContext';

function Table() {
  const { data } = useContext(PlanetContext);

  return (
    <div>
      <table>
        <thead>
          <tr>
            {Object.keys(data[0]).filter(
              (item) => item !== 'residents',
            ).map((element) => (
              <th key={ element }>
                {element.replace('_', ' ')}
              </th>))}
          </tr>
        </thead>
        <tbody>
          {data.map((planetInfo, index) => (
            <tr key={ index }>
              {Object.values(planetInfo).map((info, indexInfo) => (
                <td key={ indexInfo }>
                  {info}
                </td>
              ))}
            </tr>))}
        </tbody>
      </table>
    </div>

  );
}

Table.propTypes = {
  data: PropTypes.shape({
    map: PropTypes.func.isRequired,
  }).isRequired,
};

export default Table;
