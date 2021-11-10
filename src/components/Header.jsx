import React, { useContext } from 'react';
import MyContext from '../context/MyContext';
import logo from '../images/Star_Wars_Logo.png';

function Header() {
  const { filter, setFilter } = useContext(MyContext);

  const handleChange = ({ target }) => {
    const { value } = target;
    setFilter({
      ...filter,
      filterByName: {
        name: value,
      },
    });
  };

  return (
    <header>
      <img src={ logo } alt="Logo Star Wars" />
      <h1>Star WArs Planet Search</h1>
      <input
        placeholder="Choose the Planet"
        data-testid="name-filter"
        type="text"
        onChange={ handleChange }
        name="search"
        className="input-text"
      />
    </header>
  );
}

export default Header;
