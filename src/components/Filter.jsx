import React, { useContext, useState } from 'react';
import PlanetsContext from '../context/PlanetsContext';

function Filter() {
  const { filters, setFilters, setIsFiltering } = useContext(PlanetsContext);
  const [column, setColumn] = useState('population');
  const [comparison, setComparison] = useState('maior que');
  const [valuer, setValuer] = useState(0);

  const handleChange = ({ target: { value } }) => {
    setFilters({
      ...filters,
      filterByName: {
        name: value,
      },
    });
  };
  const handleClick = () => {
    setFilters(
      {
        ...filters,
        filterByNumericValues: [
          ...filters.filterByNumericValues,
          { column, comparison, valuer },
        ],
      },
    );
    setIsFiltering(true);
  };

  return (
    <div>
      <div>
        Filter
        <input
          type="text"
          data-testid="name-filter"
          value={ filters.filterByName.name }
          onChange={ handleChange }
          placeholder="Filtre pelo nome"
        />
      </div>
      <select
        data-testid="column-filter"
        onChange={ (e) => setColumn(e.target.value) }
        value={ column }
      >
        <option value="population">population</option>
        <option value="orbital_period">orbital_period</option>
        <option value="diameter">diameter</option>
        <option value="rotation_period">rotation_period</option>
        <option value="surface_water">surface_water</option>
      </select>
      <select
        data-testid="comparison-filter"
        onChange={ (e) => setComparison(e.target.value) }
        vale={ comparison }
      >
        <option value="maior que">maior que</option>
        <option value="igual a">igual a</option>
        <option value="menor que">menor que</option>
      </select>
      <input
        data-testid="value-filter"
        type="number"
        onChange={ (e) => setValuer(e.target.value) }
        value={ valuer }
      />

      <button
        type="button"
        data-testid="button-filter"
        onClick={ handleClick }
      >
        Filtrar
      </button>
    </div>

  );
}

export default Filter;
