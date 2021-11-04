import React from 'react';

import FilterByName from './FilterByName';
import FilterByNumericValues from './FilterByNumericValues';
import FilterByOrder from './FilterByOrder';
import DeleteNumericFilter from './DeleteNumericFilter';

import '../App.css';

const SearchBar = () => (
  <div className="search-bar">
    <div>
      <FilterByName />
    </div>
    <div>
      <FilterByNumericValues />
      <FilterByOrder />
      <DeleteNumericFilter />
    </div>
  </div>
);

export default SearchBar;
