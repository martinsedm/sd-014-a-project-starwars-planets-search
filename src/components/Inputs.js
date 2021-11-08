import React, { useContext } from 'react';
import StarWarsContext from '../context/StarwarsContext';

const columnFilterArray = ['population', 'orbital_period',
  'diameter', 'rotation_period', 'surface_water'];

const comparisonFilterArray = ['maior que', 'menor que', 'igual a'];

function Inputs() {
  const { handleChangeName, handleChange, handleClick } = useContext(StarWarsContext);
  return (
    <div>
      Pesquisar:
      <input
        name="filterByName"
        type="text"
        placeholder="Buscar por Texto"
        onChange={ handleChangeName }
        data-testid="name-filter"
      />
      <input
        type="number"
        placeholder="Buscar por Valor"
        data-testid="value-filter"
        name="filterByNumericValues"
        id=""
        onChange={ handleChange }
      />
      <select
        data-testid="comparison-filter"
        name="comparison"
        onChange={ handleChange }
      >
        { comparisonFilterArray
          .map((value) => (
            <option
              key={ value }
              value={ value }
            >
              {value}
            </option>
          ))}
      </select>

      <select
        data-testid="column-filter"
        name="column"
        onChange={ handleChange }
      >
        { columnFilterArray
          .map((filter) => (
            <option
              key={ filter }
              value={ filter }
            >
              {filter}
            </option>
          ))}
      </select>

      <button
        type="button"
        onClick={ handleClick }
        data-testid="button-filter"
      >
        Filtrar
      </button>
    </div>);
}

export default Inputs;
