import React, { useContext, useState } from 'react';
import myContext from '../context/myContext';

export default function FilterName() {
  const [name, setName] = useState('');
  const { filterFunc: { changeFilters } } = useContext(myContext);

  const handleClick = ({ target }) => {
    setName(target.value);
    changeFilters('filtersByName', { name: target.value });
  };

  return (
    <div>
      <input
        name="name"
        type="text"
        placeholder="Busque um planeta"
        data-testid="name-filter"
        value={ name }
        onChange={ handleClick }
      />
    </div>
  );
}
