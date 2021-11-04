import React, { useEffect, useContext } from 'react';
import StarwarsSearch from '../Context/StarwarsContext';
import { filterAll } from '../service/filters';

function TablePlanets() {
  const { filters, planetsFiltred, planetsResponseApi,
    setPlanetsFiltred } = useContext(StarwarsSearch);

  useEffect(() => {
    filterAll(setPlanetsFiltred, filters, planetsResponseApi);
  }, [filters, planetsResponseApi, setPlanetsFiltred]);

  return (
    <main>
      {
        // mostrar os filtros que estão ativo verificando no state
      }
      <table>
        <tbody>
          <tr>
            {
              planetsFiltred.length > 0 && Object.keys(planetsFiltred[0]).map((item) => (
                <th key={ item }>
                  {item}
                </th>))
            }
          </tr>
          {
            planetsFiltred.length > 0
              && planetsFiltred.map((planet) => (
                <tr key={ planet.name }>
                  {Object.values(planet)
                    .map((valueColumn) => <td key={ valueColumn }>{valueColumn}</td>)}
                </tr>
              ))
          }
        </tbody>
      </table>
    </main>
  );
}

export default TablePlanets;
