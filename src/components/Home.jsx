import React from 'react';
import NumericFilter from './NumericFilter';
import Search from './Search';
import Table from './Table';

function Home() {
  return (
    <div>
      <h1>Projeto Star Wars - Trybe</h1>
      <Search />
      <NumericFilter />
      <Table />

    </div>
  );
}

export default Home;
