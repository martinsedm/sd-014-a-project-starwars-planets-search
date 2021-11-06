import React from 'react';
import SearchByNameInput from './SearchByNameInput';
import SearchByNumericInput from './SearchByNumericInput';

function SearchForm() {
  return (
    <div>
      <SearchByNameInput />
      <SearchByNumericInput />
    </div>
  );
}

export default SearchForm;
