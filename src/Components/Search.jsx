import React, { useContext } from 'react';
import StarwarsContext from '../context/StarwarsContext';

function Search() {
  const { setFilters } = useContext(StarwarsContext);

  const handleChange = (e) => {
    const filtro = {
      filterByName: {
        name: e.target.value,
      },
    };
    setFilters(filtro);
  };
  return (
    <input data-testid="name-filter" type="text" onChange={ handleChange } />
  );
}

export default Search;
