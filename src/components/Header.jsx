import React, { useContext } from 'react';
import Context from '../context/Context';

function Header() {
  const { data, setFilteredData, setFilters } = useContext(Context);

  function handleChange({ target }) {
    setFilters({
      filterByName: {
        name: target.value,
      },
    });
    const filtered = data.filter((planet) => planet.name.includes(target.value));
    setFilteredData(filtered);
  }

  return (
    <header>
      <input
        type="text"
        placeholder="Filtre por nome"
        data-testid="name-filter"
        onChange={ handleChange }
      />
    </header>
  );
}

export default Header;
