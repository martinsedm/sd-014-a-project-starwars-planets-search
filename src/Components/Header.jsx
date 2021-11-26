import React, { userContext } from 'react' ;
import FilterContext from './Context/FilterContext';

function Header() {
  const { handlerChangeName } = userContext(FilterContext);
  return (
    <Header>
      <input
        type="text"
        placeholder="Digite nome do planeta"
        data-testid="name-filter"
        onChange={ handlerChangeName }
      />
    </Header>
  );
}

export default Header;