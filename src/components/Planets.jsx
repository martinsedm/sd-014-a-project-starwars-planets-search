import React, { useState, useEffect } from 'react';
import getStarWarsPlanets from '../services/swAPI';
import RenderPlanets from './RenderPlanets';
import Header from './Header';

function Planets() {
  const [planets, setPlanets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [inputName, setInputName] = useState('');
  const [filter, setFilter] = useState({});
  const [column, setColumn] = useState('population');
  const [comparison, SetComparison] = useState('maior que');
  const [value, setValue] = useState(0);
  const [filterByNumericValues, setFilterByNumericValues] = useState([]);

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
      filterByNumericValues,
    });
  }, [inputName, filterByNumericValues]);

  const filtrar = () => {
    setFilterByNumericValues([...filterByNumericValues, { column, comparison, value }]);
  };

  return (
    <div>
      <Header />
      <input
        type="text"
        value={ inputName }
        onChange={ (e) => setInputName(e.target.value) }
        data-testid="name-filter"
      />
      <select
        onChange={ (e) => setColumn(e.target.value) }
        data-testid="column-filter"
      >
        {filterByNumericValues.length > 0
          && filterByNumericValues[0].column === 'population'
          ? null : <option value="population">population</option>}
        {filterByNumericValues.length > 0
          && filterByNumericValues[0].column === 'orbital_period'
          ? null : <option value="orbital_period">orbital_period</option>}
        {filterByNumericValues.length > 0
          && filterByNumericValues[0].column === 'diameter'
          ? null : <option value="diameter">diameter</option>}
        {filterByNumericValues.length > 0
          && filterByNumericValues[0].column === 'rotation_period'
          ? null : <option value="rotation_period">rotation_period</option>}
        {filterByNumericValues.length > 0
          && filterByNumericValues[0].column === 'surface_water'
          ? null : <option value="surface_water">surface_water</option>}
      </select>
      <select
        value={ comparison }
        onChange={ (e) => SetComparison(e.target.value) }
        data-testid="comparison-filter"
      >
        <option value="maior que">maior que</option>
        <option value="menor que">menor que</option>
        <option value="igual a">igual a</option>
      </select>
      <input
        type="number"
        value={ value }
        onChange={ (e) => setValue(e.target.value) }
        data-testid="value-filter"
      />
      <button
        type="button"
        data-testid="button-filter"
        onClick={ filtrar }
      >
        Filtrar
      </button>
      {loading ? null : <RenderPlanets planets={ planets } filter={ filter } />}
    </div>
  );
}

export default Planets;
