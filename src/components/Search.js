import React, { useContext } from 'react';
import Input from './generic/Input';
import FormValueNumeric from './FormValueNumeric';
import FormOrderFilter from './FormOrderFilter';
import StarwarsSearch from '../Context/StarwarsContext';

function Search() {
  const { filters, setFilters } = useContext(StarwarsSearch);

  return (
    <div>
      <h1>Projeto Star Wars - Trybe</h1>
      <Input
        type="text"
        setState={ (name) => setFilters({
          ...filters,
          filterByName: {
            name,
          },
        }) }
        name="SearchName"
        value={ filters.filterByName.name }
        testId="name-filter"
      />
      <FormValueNumeric />
      <FormOrderFilter />
    </div>
  );
}

export default Search;
