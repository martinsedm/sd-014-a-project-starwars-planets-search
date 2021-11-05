import React, { useContext } from 'react';
import Allcontext from '../context/context';

const Header = () => {
  const { updateSearch } = useContext(Allcontext);
  return (
    <header>
      <h3>Projeto Star Wars - Ttybe</h3>
      <input data-testid="name-filter" onChange={ updateSearch } type="text" />
    </header>
  );
};

export default Header;
