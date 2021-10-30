import React from 'react';
import Input from './generic/Input';
import FormValueNumeric from './FormValueNumeric';
import FormOrderFilter from './FormOrderFilter';

function Search() {
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
