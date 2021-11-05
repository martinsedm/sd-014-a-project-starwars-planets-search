import React, { useContext } from 'react';
import StarWarsContext from '../context/StarwarsContext';

function Inputs() {
  const { handleChange } = useContext(StarWarsContext);
  return (
    <div>
      Pesquisar:
      <input
        name="text"
        type="text"
        onChange={ handleChange }
        data-testid="name-filter"
      />
    </div>);
}

export default Inputs;
