import React from 'react';
import FilterBar from '../components/FilterBar';
import PlanetsTable from '../components/PlanetsTable';

function Home() {
  return (
    <div>
      <h1>Star Wars Planets</h1>
      <FilterBar />
      <PlanetsTable />
    </div>
  );
}

export default Home;
