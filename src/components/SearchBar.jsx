import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function SearchBar() {
  const {
    column,
    handleNumericChange,
    changeNumericClick,
    numberFilters,
    handleDeleteFilter,

  } = useContext(StarWarsContext);

  const arrOption = ['population', 'orbital_period',
    'diameter', 'rotation_period', 'surface_water'];

  const { filterByNumericValues } = numberFilters;

  const filterValues = filterByNumericValues.map((filtro) => (
    filtro.column
  ));

  const restValues = arrOption.filter((option) => !filterValues.includes(option))
    .concat(filterValues.filter((option) => !arrOption.includes(option)));
  console.log(restValues);
  // filtros pegando ideia desse site> https://qastack.com.br/programming/1187518/how-to-get-the-difference-between-two-arrays-in-javascript

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
        onChange={ handleNumericChange }
      >
        <option value="maior que">maior que</option>
        <option value="menor que">menor que</option>
        <option value="igual a">igual a</option>
      </select>
      <input
        data-testid="value-filter"
        type="number"
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
