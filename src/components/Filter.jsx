import React, { useContext, useEffect, useState } from 'react';
import PlanetContext from '../contexts/PlanetContext';
import Name from './filters/Name';

export default function Filter() {
  const { filters, setFilter, filterPlanets } = useContext(PlanetContext);
  const [column, setColumn] = useState('population');
  const [comparison, setComparison] = useState('maior que');
  const [value, setValue] = useState('0');

  useEffect(() => {
    filterPlanets();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filters]);

  const handleChange = ({ target }) => {
    if (target.id === 'setColumn') setColumn(target.value);
    if (target.id === 'setComparison') setComparison(target.value);
    if (target.id === 'setValue') setValue(target.value);
  };

  const handleClick = () => {
    setFilter({ ...filters, filterByNumericValues: { column, comparison, value } });
    filterPlanets();
  };

  return (
    <div>
      <Name />
      <select onChange={ handleChange } id="setColumn" data-testid="column-filter">
        <option value="population">population</option>
        <option value="orbital_period">orbital_period</option>
        <option value="diameter">diameter</option>
        <option value="rotation_period">rotation_period</option>
        <option value="surface_water">surface_water</option>
      </select>
      <select onChange={ handleChange } id="setComparison" data-testid="comparison-filter">
        <option value="maior que">maior que</option>
        <option value="menor que">menor que</option>
        <option value="igual a">igual a</option>
      </select>
      <input
        onChange={ handleChange }
        type="number"
        id="setValue"
        data-testid="value-filter"
      />
      <button type="button" onClick={ handleClick } data-testid="button-filter">Filtrar</button>
    </div>
  );
}
