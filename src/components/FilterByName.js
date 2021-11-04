import React, { useContext, useState } from 'react';
import myContext from '../context/myContext';

function FilterByName() {
  const [name, setName] = useState('');
  const { filterFuncs } = useContext(myContext);
  const { byName } = filterFuncs;

  const handleChange = ({ target }) => {
    setName(target.value);
    byName(target.value);
  };

  return (
    <div>
      <input
        name="name"
        type="text"
        value={ name }
        data-testid="name-filter"
        placeholder="Busque pelo nome do planeta"
        onChange={ handleChange }
      />
    </div>
  );
}

export default FilterByName;
