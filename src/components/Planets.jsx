import React, { useState, useEffect } from 'react';
import getStarWarsPlanets from '../services/swAPI';
import RenderPlanets from './RenderPlanets';
import Header from './Header';

function Planets() {
  const [planets, setPlanets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [inputName, setInputName] = useState('');
  const [filter, setFilter] = useState({});

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

  useEffect(() => {
    setFilter({
      filterByName: { name: inputName },
    });
  }, [inputName]);

  return (
    <div>
      <Header />
      <input
        type="text"
        value={ inputName }
        onChange={ (e) => setInputName(e.target.value) }
        data-testid="name-filter"
      />
      {loading ? null : <RenderPlanets planets={ planets } filter={ filter } />}
    </div>
  );
}

export default Planets;
