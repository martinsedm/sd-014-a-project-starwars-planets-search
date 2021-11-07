import React, { useContext, useState } from 'react';

import PlanetContext from '../context/PlanetContext';

function NumericFilter() {
  const [comparison, setComparison] = useState();
  const [number, setNumber] = useState();
  const { byNumericValues, options, select, setSelect,
    submitNumFilter } = useContext(PlanetContext);
  console.log('option[0][0]:', options[0][0]);
  console.log('select:', select);

  // console.log('NumericFilter11: ByNumericValues', byNumericValues);

  // selectOptions.map((item, index) => {
  //   if (byNumericValues.some((ele) => ele.column === item[0])) {
  //     console.log(item[0]);
  //     selectOptions.splice(index, 1);
  //   }
  //   return selectOptions;
  // });

  return (
    <form>
      <select
        value={ select }
        type="string"
        data-testid="column-filter"
        onChange={ (event) => setSelect(event.target.value) }
      >
        { options.map((item, index) => (
          <option
            key={ index }
            value={ item[0] }
          >
            { item[1] }
          </option>
        ))}
      </select>
      <select
        value={ comparison }
        type="string"
        data-testid="comparison-filter"
        onChange={ (event) => setComparison(event.target.value) }
      >
        <option value="maior que">Maior que</option>
        <option value="menor que">Menor que</option>
        <option value="igual a">Igual a</option>
      </select>
      <input
        data-testid="value-filter"
        value={ number }
        type="number"
        onChange={ (event) => setNumber(event.target.value) }
      />
      <button
        onClick={ () => submitNumFilter(select, comparison, number) }
        type="button"
        data-testid="button-filter"
      >
        Enviar
      </button>
    </form>
  );
}

export default NumericFilter;
