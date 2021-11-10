import React, { useContext } from 'react';
import PlanetContext from '../context/PlanetContext';

function DropDownColumn() {
  const { valueColumn, setValueColumn } = useContext(PlanetContext);

  return (
    <select
      type="select"
      name="column-filter"
      value={ valueColumn }
      data-testid="column-filter"
      onChange={ ({ target: { value } }) => setValueColumn(value) }
    >
      <option value="">-</option>
      <option value="population">population</option>
      <option value="orbital_period">orbital_period</option>
      <option value="diameter">diameter</option>
      <option value="rotation_period">rotation_period</option>
      <option value="surface_water">surface_water</option>
    </select>
  );
}

export default DropDownColumn;
