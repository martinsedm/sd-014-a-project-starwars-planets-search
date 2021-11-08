import React from 'react';
import NumericFilter from './NumericFilter';
import Search from './Search';
import Table from './Table';
import SelectedFilter from './SelectedFilter';

function Home() {
  return (
    <div>
      <h1>Projeto Star Wars - Trybe</h1>
      <Search />
      <NumericFilter />
      <SelectedFilter />
      <Table />

    </div>
  );
}

export default Home;
