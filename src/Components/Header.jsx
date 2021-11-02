import React, { useContext } from 'react';
import Context from '../Context/Context';

function Header() {
  const { setSearchText, searchText } = useContext(Context);

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
