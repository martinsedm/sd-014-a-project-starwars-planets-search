import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import PlanetContext from '../context/PlanetContext';

function Table() {
  const { data, isLoading, filteredPlanets } = useContext(PlanetContext);

  const PLANET_INFO_LENGTH = 13;

  return (
    <div>
      {filteredPlanets.length === 0
        ? <h3>Nenhum planeta atende ao filtro selecionado</h3>
        : !isLoading && (
          <table>
            <thead>
              <tr>
                {Object.keys(data[0]).map((element) => (
                  <th key={ element }>
                    {element.replace('_', ' ')}
                  </th>))}
              </tr>
            </thead>
            <tbody>
              {filteredPlanets.map((planetInfo, index) => (
                <tr key={ index }>
                  <td key={ planetInfo.name } data-testid="planet-name">
                    {planetInfo.name}
                  </td>
                  {/* {teste = Object.values(planetInfo).splice(1,12)} */}
                  {Object.values(planetInfo)
                    .slice(1, PLANET_INFO_LENGTH).map((info, indexInfo) => (
                      <td key={ indexInfo }>
                        {info}
                      </td>
                    ))}
                </tr>))}
            </tbody>
          </table>)}
    </div>
  );
}

Table.propTypes = {
  data: PropTypes.shape({
    map: PropTypes.func.isRequired,
  }).isRequired,
};

export default Table;
