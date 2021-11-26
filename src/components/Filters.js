import React, { useContext, useState } from 'react';
import starWarsContext from '../contexAPI/StarWarsContext';

function Filters() {
  const { filters, setFilters, currentFilters, setCurrentFilters,
    columnToTakeOff, setColumnToTakeOff } = useContext(starWarsContext);
  const [column, setColumn] = useState('population');
  const [comparison, setComparison] = useState('maior que');
  const [value, setValue] = useState(0);
  const { filterByName: { name }, filterByNumericValues } = filters;
  // seteando o valor da chave name, para setear o filtro por planeta
  function handleChangePlanet({ target: { value: values } }) {
    setFilters({
      ...filters,
      filterByName: {
        name: values,
      },
    });
  }
  //  seteando filters, no click do botão
  function handleClick() {
    setCurrentFilters({ value, column, comparison });
    setFilters({
      ...filters,
      filterByNumericValues: [...filterByNumericValues, currentFilters],
    });
    setColumnToTakeOff(column);
  }

  const filertOptions = [
    'population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water'];

  return (
    <form>
      <label htmlFor="name">
        Pesquisa por nome:
        <input
          type="text"
          data-testid="name-filter"
          id="name"
          value={ name }
          onChange={ handleChangePlanet }
        />
      </label>
      <select
        data-testid="column-filter"
        onChange={ ({ target: { value: e } }) => setColumn(e) }
        name="column"
      >
        {filertOptions
          .filter((option) => option !== columnToTakeOff)
          .map((option) => <option key={ option } value={ option }>{option}</option>)}
      </select>
      <select
        data-testid="comparison-filter"
        onChange={ ({ target: { value: e } }) => setComparison(e) }
        name="comparison"
      >
        <option value="maior que">maior que</option>
        <option value="menor que">menor que</option>
        <option value="igual a">igual a</option>
      </select>
      <input
        data-testid="value-filter"
        type="number"
        name="value"
        onChange={ ({ target: { value: e } }) => setValue(e) }
      />
      <button
        type="button"
        onClick={ handleClick }
        data-testid="button-filter"
      >
        Filtrar
      </button>
    </form>
  );
}

export default Filters;
