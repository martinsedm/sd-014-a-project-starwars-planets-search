import React, { useContext, useState } from 'react';

import PlanetContext from '../context/PlanetContext';

function NumericFilter() {
  const [select, setSelect] = useState();
  const [comparison, setComparison] = useState();
  const [number, setNumber] = useState();
  const { byNumericValues, submitNumFilter } = useContext(PlanetContext);

  const selectOptions = [['population', 'Population'],
    ['orbital_period', 'Orbital Period'], ['diameter', 'Diameter'],
    ['rotation_period', 'Rotation Period'], ['surface_Water', 'Surface Water']];

  return (
    <form onSubmit={ () => submitNumFilter(select, comparison, number) }>
      <select
        value={ select }
        type="string"
        data-testid="column-filter"
        onChange={ (event) => setSelect(event.target.value) }
      >
        { selectOptions.filter().map((item, index) => (
          <option
            key={ index }
            value={ item[0] }
          >
            {item[1]}
          </option>
        ))}
        {/* <option value="population">Population</option>
        <option value="orbital_period">Orbital Period</option>
        <option value="diameter">Diameter</option>
        <option value="rotation_period">Rotation Period</option>
        <option value="surface_water">Surface Water</option> */}
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
      <button type="submit" data-testid="button-filter">Enviar</button>
    </form>
  );
}

export default NumericFilter;
