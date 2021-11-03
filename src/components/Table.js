import React, { useContext, useEffect, useState } from 'react';
import StarWarsContext from '../context';
import { tableHeads } from '../data';

function Table() {
  const {
    data,
    populatePlanets,
    filteredData,
    filters: {
      filterByName: { name },
      filterByNumericValues,
    } } = useContext(StarWarsContext);
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

  const renderPlanets = () => {
    if (name.length === 0 && filterByNumericValues.length === 0) {
      return renderAllPlanets(data);
    }
    if (filteredData.length > 0) {
      return renderAllPlanets(filteredData);
    }
    return <tr><td>No planets found.</td></tr>;
  };

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
          !loading && renderPlanets()
        }
      </tbody>
    </table>
  );
}

export default Table;
