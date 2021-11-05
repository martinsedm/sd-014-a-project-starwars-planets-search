import React, { useContext } from 'react';
import AppContext from '../context/AppContext';

function QuantityInput() {
  const { inputedQuantity, setInputedQuantity } = useContext(AppContext);
  return (
    <input
      type="text"
      data-testid="value-filter"
      onChange={ ({ target: { value } }) => setInputedQuantity(value) }
      value={ inputedQuantity }
    />
  );
}

export default QuantityInput;
