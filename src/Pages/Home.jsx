import React from 'react';
import FilterSearch from '../components/FilterSearch';
import SearchBar from '../components/SearchBar';
import Table from '../components/Table';

function Home() {
  return (
    <div>
      <h1>Star Wars</h1>
      <FilterSearch />
      <SearchBar />

      <Table />
    </div>
  );
}

export default Home;
