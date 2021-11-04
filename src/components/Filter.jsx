import React, { useContext, useEffect, useState } from 'react';
import PlanetContext from '../contexts/PlanetContext';
import FilterCard from './filters/FilterCard';
import Name from './filters/Name';

export default function Filter() {
  const { filters, setFilter } = useContext(PlanetContext);
  const [column, setColumn] = useState('population');
  const [comparison, setComparison] = useState('maior que');
  const [value, setValue] = useState('0');

  useEffect(() => {
    // filterPlanets();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filters]);

  const handleChange = ({ target }) => {
    if (target.id === 'setColumn') setColumn(target.value);
    if (target.id === 'setComparison') setComparison(target.value);
    if (target.id === 'setValue') setValue(target.value);
  };

  const disabledOpt = () => {
    const select = document.getElementById('setColumn');
    select.childNodes.forEach((element) => {
      if (element.value === column) {
        element.remove();
      }
    });
    setColumn(select.firstChild.value);
  };

  const handleClick = () => {
    setFilter({
      ...filters,
      filterByNumericValues: [...filters.filterByNumericValues,
        { column, comparison, value }],
    });
    disabledOpt();
    // filterPlanets();
  };

  return (
    <div>
      <Name />
      <select
        onChange={ handleChange }
        id="setColumn"
        data-testid="column-filter"
        value={ column }
      >
        <option className="column" value="population">population</option>
        <option className="column" value="orbital_period">orbital_period</option>
        <option className="column" value="diameter">diameter</option>
        <option className="column" value="rotation_period">rotation_period</option>
        <option className="column" value="surface_water">surface_water</option>
      </select>
      <select
        onChange={ handleChange }
        id="setComparison"
        data-testid="comparison-filter"
      >
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
      <button
        type="button"
        onClick={ handleClick }
        data-testid="button-filter"
      >
        Filtrar
      </button>
      <FilterCard />
    </div>
  );
}
