import React, { useEffect, useContext } from 'react';
import PlanetsKeyDeleted from '../service/fetchApi';
import StarwarsSearch from '../Context/StarwarsContext';

function TablePlanets() {
  const { planetsFiltred, setPlanetsFiltred } = useContext(StarwarsSearch);
  useEffect(() => {
    PlanetsKeyDeleted('residents')
      .then((response) => setPlanetsFiltred(response));
  }, [setPlanetsFiltred]);

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
