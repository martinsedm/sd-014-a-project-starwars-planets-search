import React, { useContext } from 'react';
import PlanetContext from '../context/PlanetContext';

function NumberBox() {
  const { numberBox, setNumberBox } = useContext(PlanetContext);

  return (
    <input
      type="number"
      name="value-filter"
      data-testid="value-filter"
      value={ numberBox }
      onChange={ ({ target: { value } }) => setNumberBox(value) }
    />
  );
}

export default NumberBox;
