import React, { useContext, useState } from 'react';
import PlanetsContext from '../ContextAPI/PlanetsContext';

function NumberFilter() {
  const [stateNumberFilter, setStateNumberFilter] = useState([{
    column: '',
    comparison: '',
    value: '',
  }]);
  const [optionColumn, setOptionColumn] = useState([
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ]);

  const { data, setFiltrado, filtrado, setFilter, filter } = useContext(PlanetsContext);

  const handleChange = ({ target: { name, value } }) => {
    setStateNumberFilter([{
      ...stateNumberFilter[0],
      [name]: value,
    }]);
  };

  const RemoveOption = () => {
    const filtroEscolhido = optionColumn
      .find((item) => item === stateNumberFilter[0].column);
    optionColumn.splice(optionColumn.indexOf(filtroEscolhido), 1);
    console.log(optionColumn);
    setOptionColumn(optionColumn);
    return optionColumn;
  };

  // Filtro do select
  const FilterNumeric = () => {
    const { column, comparison, value } = stateNumberFilter[0];
    const filtroSelect = (filtrado.length < 1) ? [...data] : [...filtrado];

    const filtradoSelect = filtroSelect.filter((planets) => {
      switch (comparison) {
      case 'maior que':
        return (Number(planets[column]) > Number(value));
      case 'menor que':
        return (Number(planets[column]) < Number(value));
      case 'igual a':
        return (Number(planets[column]) === Number(value));
      default:
        return [];
      }
    });
    setFiltrado(filtradoSelect);
  };

  const handleClick = () => {
    FilterNumeric();
    setFilter({
      ...filter,
      filters: {
        ...filter.filters,
        filterByNumericValues: [
          ...filter.filters.filterByNumericValues,
          ...stateNumberFilter,
        ],
      },
    });
    RemoveOption();
  };

  return (
    <div>
      <select
        data-testid="column-filter"
        name="column"
        onChange={ handleChange }
      >
        {
          optionColumn
            .map((item, index) => <option key={ index } value={ item }>{ item }</option>)
        }
      </select>

      <select
        data-testid="comparison-filter"
        name="comparison"
        onChange={ handleChange }
      >
        <option selected value="maior que">maior que</option>
        <option vau="menor que">menor que</option>
        <option value="igual a">igual a</option>
      </select>

      <label htmlFor="value" onChange={ handleChange }>
        <input type="number" data-testid="value-filter" id="value" name="value" />
      </label>

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

export default NumberFilter;
