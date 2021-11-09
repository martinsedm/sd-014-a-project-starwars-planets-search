import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';
import Table from '../components/Table';
import Filter from '../components/Filter';

function Search() {
  const { isLoading } = useContext(PlanetsContext);

  if (isLoading) {
    return (<p>...</p>);
  }

  return (
    <>
      <Filter />
      <Table />
    </>
  );
}

export default Search;
