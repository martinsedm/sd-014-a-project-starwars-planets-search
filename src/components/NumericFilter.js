import React, { useContext, useEffect, useState } from 'react';
import GlobalContext from '../provider/GlobalContext';

function NumericFilter() {
  const { filters, filterData, setFilters, categorie } = useContext(GlobalContext);
  const [column, setColumn] = useState('population');
  const [comparison, setComparison] = useState('maior que');
  const [value, setValue] = useState('value');

  useEffect(() => {
    filterData();
  }, [filters]);

  const handleButton = () => {
    setFilters({ ...filters,
      filterByNumericValues: [
        ...filters.filterByNumericValues,
        { column, comparison, value },
      ] });
  };

  return (
    <form>
      <label htmlFor="column">
        <select
          name="column"
          data-testid="column-filter"
          onChange={ (event) => setColumn(event.target.value) }
        >
          { categorie
            .map((categ) => <option key={ categ } value={ categ }>{ categ }</option>)}
        </select>
      </label>
      <label htmlFor="comparison">
        <select
          name="comparison"
          data-testid="comparison-filter"
          onChange={ (event) => setComparison(event.target.value) }
        >
          <option value="maior que">maior que</option>
          <option value="igual a">igual a</option>
          <option value="menor que">menor que</option>
        </select>
      </label>
      <label htmlFor="value">
        <input
          type="number"
          data-testid="value-filter"
          name="value"
          onChange={ (event) => setValue(event.target.value) }
        />
      </label>
      <button type="button" data-testid="button-filter" onClick={ handleButton }>
        Filtrar
      </button>
    </form>
  );
}

export default NumericFilter;
