import React, { useContext } from 'react';
import Table from '../components/Table';
import PlanetsContext from '../context/PlanetsContext';

function Home() {
  const { data, headers, handleFilter } = useContext(PlanetsContext);
  return (
    <div>
      <input
        type="text"
        placeholder="Filtre por nome"
        data-testid="name-filter"
        onChange={
          ({ target }) => handleFilter(target.value)
        }
      />
      <Table planets={ data } headers={ headers } />
    </div>
  );
}

export default Home;
