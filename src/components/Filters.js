import React, { useContext, useEffect, useState } from 'react';
import starWarsContext from '../contexAPI/StarWarsContext';
import SortFilter from './SortFilter';

function Filters() {
  const { filters, setFilters } = useContext(starWarsContext);
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

  const filertOptions = [
    'population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water'];
  const usedOptions = filterByNumericValues.map((object) => object.column);

  const newOptions = filertOptions.filter((option) => !usedOptions.includes(option));

  // apaga filtro clickado
  const handleFilterClick = ({ target: { value: val } }) => {
    const newFilters = filterByNumericValues.filter((object) => object.column !== val);
    setFilters({
      ...filters,
      filterByNumericValues: newFilters,
    });
  };

  const renderFilterOptions = ({ column: col, comparison: comp, value: val }) => (
    <div data-testid="filter">
      <button
        key={ col }
        type="button"
        onClick={ handleFilterClick }
        value={ col }
      >
        {`${col} ${comp} ${val}`}
      </button>
    </div>
  );

  //  seteando filters, no click do botão
  function handleClick() {
    setFilters({
      ...filters,
      filterByNumericValues: [...filterByNumericValues, { value, column, comparison }],
    });
  }

  useEffect(() => {
    setColumn(newOptions[0]);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filters]);

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
        value={ column }
      >
        {newOptions
          .map((option) => <option key={ option } value={ option }>{option}</option>)}
      </select>
      <select
        data-testid="comparison-filter"
        onChange={ ({ target: { value: e } }) => setComparison(e) }
        name="comparison"
        value={ comparison }
      >
        <option value="maior que">maior que</option>
        <option value="menor que">menor que</option>
        <option value="igual a">igual a</option>
      </select>
      <input
        data-testid="value-filter"
        type="number"
        name="value"
        value={ value }
        onChange={ ({ target: { value: e } }) => setValue(e) }
      />
      <button
        type="button"
        onClick={ handleClick }
        data-testid="button-filter"
      >
        Filtrar
      </button>
      <SortFilter />
      <div>
        { filterByNumericValues.map(renderFilterOptions) }
      </div>
    </form>
  );
}

export default Filters;
