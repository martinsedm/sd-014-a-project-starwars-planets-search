import React, { useState, useEffect } from 'react';
import planetsApi from '../services/dataAPI';
import Loading from './Loading';

function Table() {
  const [planets, setPlanets] = useState([]);
  const [loading, setLoading] = useState(true);
  console.log(planetsApi());

  useEffect(() => {
    setLoading(true);
    planetsApi().then((data) => {
      const filtered = data.results.map((planet) => {
        delete planet.residents;
        return planet;
      });
      setPlanets(filtered);
      setLoading(false);
    });
  }, []);

  const renderPlanets = () => (
    <table>
      <thead>
        <tr>
          {Object.keys(planets[0]).map((key) => (
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

  return (
    <div>{loading ? <Loading /> : renderPlanets()}</div>
  );
}

export default Table;
