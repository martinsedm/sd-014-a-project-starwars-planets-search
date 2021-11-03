import React, { useContext } from 'react';
import GlobalContext from '../../context/context';

function Header() {
  const { setFilters } = useContext(GlobalContext);

  const renderInput = () => (
    <input
      data-testid="name-filter"
      placeholder="Filtrar por nome"
      type="text"
      onChange={ ({ target }) => setFilters({ filterByName: {
        name: target.value,
      } }) }
    />
  );

  return (
    <header>
      {renderInput()}
    </header>
  );
}

export default Header;
