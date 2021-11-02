import React, { useContext } from 'react';
import Context from '../Context/Context';
// import React, { useState } from 'react';

function Header() {
  const { setSearchText, searchText } = useContext(Context);
  // const [filter, updateFilter] = useState('');

  return (
    <input
      type="text"
      placeholder="Filtrar Planetas"
      data-testid="name-filter"
      name="name"
      value={ searchText }
      onChange={ (e) => setSearchText(e.target.value) }
    />

  );
}

export default Header;
