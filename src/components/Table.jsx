import React, { useContext } from 'react';
import planetsContext from '../context/planetsContext';
import Loading from './Loading';

function Table() {
  const { dataPlanets, isLoading, filter } = useContext(planetsContext);

  const renderPlanets = () => {
    const { filterByName: { name } } = filter;
    const filteredPlanets = name
      ? dataPlanets.filter((planet) => planet.name.includes(name))
      : dataPlanets;

    return (
      <table>
        <thead>
          <tr>
            {Object.keys(dataPlanets[0]).map((key) => (
              <th key={ key }>{key.replace('_', '').toUpperCase()}</th>
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
  };

  return (
    <div>{isLoading ? <Loading /> : renderPlanets()}</div>
  );
}

export default Table;
