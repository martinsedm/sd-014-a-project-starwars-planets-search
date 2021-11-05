import React, { useContext } from 'react';
import Filters from '../components/Filters';

import Header from '../components/Header';
import PlanetsTable from '../components/PlanetsTable';
import StarContext from '../context/StarContext';

function Home() {
  const { planets } = useContext(StarContext);

  return (
    <main>
      <Header />
      <Filters />
      { planets.length > 0 && <PlanetsTable />}
    </main>
  );
}

export default Home;
