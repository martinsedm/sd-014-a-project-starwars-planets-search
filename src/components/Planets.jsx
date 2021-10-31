import React, { useState, useEffect } from 'react';
import getStarWarsPlanets from '../services/swAPI';

function Planets() {
  const [planets, setPlanets] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getStarWarsPlanets().then((data) => {
      const filtrado = data.results.map((planet) => {
        delete planet.residents;
        return planet;
      });
      setPlanets(filtrado);
      setLoading(false);
    });
  }, []);

  const renderPlanets = () => (
    <table>
      <thead>
        <tr>
          {Object.keys(planets[0]).map((key) => (
            <th key={ key }>{key.replace('_', ' ').toUpperCase()}</th>
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
    <div>
      {loading ? null : renderPlanets()}
    </div>
  );
}

export default Planets;
