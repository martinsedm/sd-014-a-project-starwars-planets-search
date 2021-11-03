import React, { useContext } from 'react';
import planetsContext from '../context/planetsContext';
import Loading from './Loading';

function Table() {
  const { dataPlanets, isLoading, filters } = useContext(planetsContext);

  /**
 * Consultei o repositório do DOUGLAS SOUZA para resolver essa parte.
 * Link do repositório: https://github.com/tryber/sd-014-a-project-starwars-planets-search/pull/13/commits/6528cb2ae2fa0bd028d14d9fef3a8fa7ebacec54
 */

  const filterPlanetsByName = () => {
    const { filterByName: { name } } = filters;
    if (name) {
      return dataPlanets.filter((planet) => planet.name.includes(name));
    }
    return dataPlanets;
  };

  const filterPlanetsByValues = (planets) => {
    const { filterByNumericValues: valuesFilter } = filters;
    return planets.filter((planet) => (
      valuesFilter.every(({ column, comparison, value }) => {
        switch (comparison) {
        case 'maior que':
          return Number(planet[column]) > Number(value);
        case 'menor que':
          return Number(planet[column]) < Number(value);
        case 'igual a':
          return Number(planet[column]) === Number(value);
        default:
          return null;
        }
      })
    ));
  };

  const renderTableBody = () => {
    const planetsByName = filterPlanetsByName();
    const planets = filterPlanetsByValues(planetsByName);

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
  };

  return (
    <div>{isLoading ? <Loading /> : renderTableBody()}</div>
  );
}

export default Table;
