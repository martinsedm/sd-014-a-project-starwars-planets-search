import React from 'react';
import FilterName from '../Components/FilterName';
import FilterNumber from '../Components/FilterNumber';
import Table from '../Components/Table';

function Home() {
  return (
    <>
      <h1>StarWars Planets</h1>
      <FilterName />
      <FilterNumber />
      <Table />

    </>

  );
}
export default Home;
