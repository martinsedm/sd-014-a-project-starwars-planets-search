import React, { useContext, useState } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function SearchBar() {
  const {
    numberFilters,
    handleDeleteFilter,
    setNumberFilters,

  } = useContext(StarWarsContext);

  const [column, setColumn] = useState('population');
  const [comparison, setComparison] = useState('maior que');
  const [value, setValue] = useState('0');

  const arrOption = ['population', 'orbital_period',
    'diameter', 'rotation_period', 'surface_water'];

  const { filterByNumericValues } = numberFilters;

  const filterValues = filterByNumericValues.map((filtro) => (
    filtro.column
  ));

  const restValues = arrOption.filter((option) => !filterValues.includes(option));
  console.log(restValues);
  // filtros pegando ideia desse site> https://qastack.com.br/programming/1187518/how-to-get-the-difference-between-two-arrays-in-javascript

  const handleNumericChange = ({ target }) => {
    if (target.id === 'setColumn') setColumn(target.value);
    if (target.id === 'setComparison') setComparison(target.value);
    if (target.id === 'setValue') setValue(target.value);
  };

  const changeNumericClick = () => {
    setNumberFilters({
      ...numberFilters,
      filterByNumericValues: [...numberFilters.filterByNumericValues,
        { column, comparison, value }],
    });
  };

  return (
    <div>
      <select
        data-testid="column-filter"
        id="setColumn"
        value={ column }
        onChange={ handleNumericChange }
      >
        {restValues.map((option, index) => (
          <option key={ index } value={ option }>{option}</option>
        ))}
      </select>
      <select
        data-testid="comparison-filter"
        id="setComparison"
        value={ comparison }
        onChange={ handleNumericChange }
      >
        <option value="maior que">maior que</option>
        <option value="menor que">menor que</option>
        <option value="igual a">igual a</option>
      </select>
      <input
        data-testid="value-filter"
        type="number"
        value={ value }
        placeholder="Digite um número"
        id="setValue"
        onChange={ handleNumericChange }
      />
      <button
        data-testid="button-filter"
        type="button"
        onClick={ changeNumericClick }
      >
        Filtrar
      </button>
      <div>
        { filterByNumericValues.map((item) => (
          <div key={ item.column } data-testid="filter">
            <button
              onClick={ () => handleDeleteFilter(item.column) }
              type="button"
            >
              {`${item.column} ${item.comparison} ${item.value}` }
              {' '}
              x
            </button>
          </div>
        )) }
      </div>
    </div>);
}

export default SearchBar;
