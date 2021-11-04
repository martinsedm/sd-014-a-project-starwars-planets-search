import React, { useState, useContext, useEffect } from 'react';
import StarwarsSearch from '../Context/StarwarsContext';
import Input from './generic/Input';
import Select from './generic/Select';
import Button from './generic/Button';

import { getKeysNumeric } from '../service/filters';

function FormValueNumeric() {
  const [filterNumeric, setFilterNumeric] = useState({
    column: 'population',
    comparison: 'maior que',
    value: '100000',
  });
  const [columnsNumeric, setColumnsNumeric] = useState([]);

  const { planetsResponseApi,
    setFilters,
    filters: { filterByNumericValues },
    filters } = useContext(StarwarsSearch);

  useEffect(() => {
    if (planetsResponseApi.length > 0) {
      setColumnsNumeric(getKeysNumeric(planetsResponseApi[0]));
    }
  }, [planetsResponseApi]);

  const handleClick = () => {
    // const filtersApart = filterByNumericValues.filter((filter) => (
    //  filter.column !== filterNumeric.column));
    setFilters({
      ...filters,
      filterByNumericValues: [...filterByNumericValues, filterNumeric],
    });
    const columnsFiltred = columnsNumeric
      .filter((column) => column !== filterNumeric.column);
    setColumnsNumeric(columnsFiltred);
  };

  const optionsOperadores = ['maior que', 'menor que', 'igual a'];
  return (
    <form>
      {
        columnsNumeric.length > 0
        && <Select
          name="ColunasNumericas"
          setState={ (column) => setFilterNumeric({
            ...filterNumeric,
            column,
          }) }
          testId="column-filter"
          options={ columnsNumeric }
          value={ filterNumeric.column }
        />
      }
      <Select
        name="ColunasComparação"
        setState={ (comparison) => setFilterNumeric({
          ...filterNumeric,
          comparison,
        }) }
        testId="comparison-filter"
        options={ optionsOperadores }
        value={ filterNumeric.comparison } // valor do state, no valor inincial deve estar o valor padrao
      />
      <Input
        type="number"
        setState={ (value) => setFilterNumeric({
          ...filterNumeric,
          value,
        }) }
        testId="value-filter"
        name="valueFilter"
        value={ filterNumeric.value } // valor do state
      />
      <Button
        testId="button-filter"
        onClick={ handleClick }
        text="Filtrar"
      />
    </form>
  );
}

export default FormValueNumeric;
