import React, { useContext } from 'react';
import GlobalContext from '../../context/context';
import NumericFilter from '../NumericFilter';

function Header() {
  const { setFilters } = useContext(GlobalContext);

  const renderInput = () => (
    <input
      data-testid="name-filter"
      placeholder="Filtrar por nome"
      type="text"
      onChange={ ({ target }) => {
        setFilters((prevState) => ({
          ...prevState,
          filterByName: {
            name: target.value,
          },
        }));
      } }
    />
  );

  return (
    <header>
      {renderInput()}
      <NumericFilter />
    </header>
  );
}

export default Header;
