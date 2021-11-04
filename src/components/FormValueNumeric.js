import React, { useState, useContext } from 'react';
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
  const { planetsResponseApi, setFilters, filters } = useContext(StarwarsSearch);

  const testeOptionsOperadores = ['maior que', 'menor que', 'igual a'];
  return (
    <form>
      {
        planetsResponseApi.length > 0
        && <Select
          name="ColunasNumericas"
          setState={ (column) => setFilterNumeric({
            ...filterNumeric,
            column,
          }) }
          testId="column-filter"
          options={ getKeysNumeric(planetsResponseApi[0]) }
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
        options={ testeOptionsOperadores }
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
        onClick={ () => setFilters({
          ...filters,
          filterByNumericValues: [...filters.filterByNumericValues, filterNumeric],
        }) }
        text="Filtrar"
      />
    </form>
  );
}

export default FormValueNumeric;
