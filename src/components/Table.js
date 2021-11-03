import React, { useContext, useEffect } from 'react';
import StarWarsContext from '../context';
import { tableHeads } from '../data';

function Table() {
  const { data, populatePlanets } = useContext(StarWarsContext);

  useEffect(() => {
    populatePlanets();
  }, []);

  const renderPlanet = (planet) => Object.keys(planet)
    .map((key) => key !== 'residents' && <td key={ key }>{ planet[key] }</td>);

  const renderAllPlanets = (planets) => Object.values(planets)
    .map((planet) => <tr key={ planet.name }>{ renderPlanet(planet) }</tr>);

  return (
    <table>
      <thead>
        <tr>
          {
            tableHeads.map((heading, index) => (
              <th key={ index }>{ heading }</th>
            ))
          }
        </tr>
      </thead>
      <tbody>
        {
          renderAllPlanets(data)
        }
      </tbody>
    </table>
  );
}

export default Table;
