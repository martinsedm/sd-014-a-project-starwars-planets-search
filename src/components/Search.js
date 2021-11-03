import React, { useEffect, useContext } from 'react';
import Input from './generic/Input';
import StarwarsSearch from '../Context/StarwarsContext';
import FormValueNumeric from './FormValueNumeric';
import FormOrderFilter from './FormOrderFilter';

function Search() {
  const { planetsFiltred } = useContext(StarwarsSearch);

  console.log(planetsFiltred);

  return (
    <div>
      <h1>Projeto Star Wars - Trybe</h1>
      <Input
        type="text"
        setState={ (value) => console.log(value) }
        name="SearchName"
        value="valor do state"
      />
      <FormValueNumeric />
      <FormOrderFilter />
    </div>
  );
}

export default Search;
