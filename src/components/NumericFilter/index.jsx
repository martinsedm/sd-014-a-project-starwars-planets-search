import React, { useContext, useState } from 'react';
import GlobalContext from '../../context/context';

function NumericFilter() {
  const [column, setColumn] = useState('population');
  const [comparison, setComparison] = useState('maior que');
  const [value, setValue] = useState('');

  const { setFilters, filters } = useContext(GlobalContext);

  const columnArr = [
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ];

  const handleClickDelete = (param) => {
    setFilters((pState) => ({
      ...pState,
      filterByNumericValues: pState.filterByNumericValues.filter((filter) => (
        filter.column !== param
      )),
    }));
  };

  const renderFilters = () => (
    filters.filterByNumericValues.map((filter) => (
      <div key={ filter.column } data-testid="filter">
        { filter.column }
        {' '}
        { filter.comparison }
        {' '}
        { filter.value }
        {' '}
        <button
          onClick={ () => handleClickDelete(filter.column) }
          type="button"
        >
          X
        </button>
      </div>
    ))
  );

  const handleClick = () => {
    setFilters((prevState) => ({
      ...prevState,
      filterByNumericValues: [
        ...prevState.filterByNumericValues,
        {
          column,
          comparison,
          value,
        },
      ],
    }));
  };

  // Aqui faço a verificação se já existe no estado algum filtro numérico que possui
  // o mesma coluna.
  const toRender = (arr) => {
    const test = filters.filterByNumericValues.map((filter) => filter.column);
    const render = arr.filter((option) => !test.includes(option));
    return render.map((opt) => <option key={ opt } value={ opt }>{opt}</option>);
  };

  return (
    <div>
      <select
        data-testid="column-filter"
        onChange={ ({ target }) => { setColumn(target.value); } }
      >
        {toRender(columnArr)}
      </select>
      <select
        data-testid="comparison-filter"
        onChange={ ({ target }) => { setComparison(target.value); } }
      >
        <option value="maior que">maior que</option>
        <option value="menor que">menor que</option>
        <option value="igual a">igual a</option>
      </select>
      <input
        data-testid="value-filter"
        type="number"
        onChange={ ({ target }) => { setValue(target.value); } }
      />
      <button
        data-testid="button-filter"
        type="button"
        onClick={ handleClick }
      >
        Filtrar
      </button>
      {renderFilters()}
    </div>
  );
}

export default NumericFilter;
