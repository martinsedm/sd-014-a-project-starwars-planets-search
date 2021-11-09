import React, { useContext, useState, useEffect } from 'react';

import PlanetContext from '../context/PlanetContext';

function NumericFilter() {
  const [column, setColumn] = useState();
  const [comparison, setComparison] = useState('maior que');
  const [number, setNumber] = useState();
  const { data, filters, setFilters, setNumFilterData } = useContext(PlanetContext);

  const [options, setOptions] = useState(['population', 'orbital_period', 'diameter',
    'rotation_period', 'surface_water']); // Used in the NumericFilter component

  useEffect(() => { // "ComponentDidUpdate" to set the select default value as an valid option after every submission
    setColumn(options[0]);
  }, [options]);

  const submitNumFilter = (arg1 = options[0], arg2, arg3) => {
    console.log('column:', arg1);
    setFilters({ ...filters,
      filterByNumericValues: [...filters.filterByNumericValues,
        { column: arg1, comparison: arg2, value: arg3 }] });
    setOptions(options.filter((ele) => ele !== arg1));
  };

  const compareNumValue = (ele, cur) => {
    if (cur.column && cur.comparison && cur.value) {
      // console.log('ele:', ele);
      // console.log('cur', cur);
      console.log(cur.column);
      const planetValue = Number(ele[cur.column]);
      const threshold = Number(cur.value);
      switch (cur.comparison) {
      case 'maior que':
        if (planetValue > threshold) {
          return true;
        } return false;
      case 'menor que':
        if (planetValue < threshold) {
          return true;
        } return false;
      case 'igual a':
        if (planetValue === threshold) {
          return true;
        } return false;
      default:
        return true;
      }
    }
    return true;
  };

  useEffect(() => {
    function filterPlanetsByNum() {
      const test = filters.filterByNumericValues.reduce((acc, cur) => (
        acc.filter((ele) => (
          compareNumValue(ele, cur)
        ))
      ), data);
      // console.log('Retorno:', test);
      return test;
    }
    setNumFilterData(filterPlanetsByNum());
  }, [data, filters.filterByNumericValues, setNumFilterData]);

  return (
    <form>
      <select
        value={ column }
        type="string"
        data-testid="column-filter"
        onChange={ (event) => setColumn(event.target.value) }
      >
        { options.map((item, index) => (
          <option
            key={ index }
            value={ item }
          >
            { item }
          </option>
        ))}
      </select>
      <select
        value={ comparison }
        type="string"
        data-testid="comparison-filter"
        onChange={ (event) => setComparison(event.target.value) }
      >
        <option value="maior que">maior que</option>
        <option value="menor que">menor que</option>
        <option value="igual a">igual a</option>
      </select>
      <input
        data-testid="value-filter"
        value={ number }
        type="number"
        onChange={ (event) => setNumber(event.target.value) }
      />
      <button
        onClick={ () => submitNumFilter(column, comparison, number) }
        type="button"
        data-testid="button-filter"
      >
        Enviar
      </button>
    </form>
  );
}

export default NumericFilter;
