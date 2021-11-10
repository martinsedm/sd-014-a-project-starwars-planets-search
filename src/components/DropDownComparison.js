import React, { useContext } from 'react';
import PlanetContext from '../context/PlanetContext';

function DropDownComparison() {
  const { valueComparison, setValueComparison } = useContext(PlanetContext);

  return (
    <select
      type="select"
      name="comparison-filter"
      data-testid="comparison-filter"
      value={ valueComparison }
      onChange={ ({ target: { value } }) => setValueComparison(value) }
    >
      <option value="">-</option>
      <option value="maior que">maior que</option>
      <option value="menor que">menor que</option>
      <option value="igual a">igual a</option>
    </select>
  );
}

export default DropDownComparison;
