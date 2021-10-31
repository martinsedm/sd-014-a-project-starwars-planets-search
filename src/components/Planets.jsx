import React, { useState, useEffect } from 'react';
import getStarWarsPlanets from '../services/swAPI';
import RenderPlanets from './RenderPlanets';

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

  return (
    <div>
      {loading ? null : <RenderPlanets planets={ planets } />}
    </div>
  );
}

export default Planets;
