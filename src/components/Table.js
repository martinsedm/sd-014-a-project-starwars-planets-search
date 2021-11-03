import React, { useContext, useEffect, useState } from 'react';
import StarWarsContext from '../context';

const tableHeads = [
  'Name',
  'Rotation Period',
  'Orbital Period',
  'Diameter',
  'Climate',
  'Gravity',
  'Terrain',
  'Surface Water',
  'Population',
  'Films',
  'Created',
  'Edited',
  'URL',
];

function Table() {
  const [data, populatePlanets] = useContext(StarWarsContext);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    populatePlanets()
      .then(() => setLoading(false));
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
          !loading && renderAllPlanets(data)
        }
      </tbody>
    </table>
  );
}

export default Table;
