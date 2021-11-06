import React, { useContext } from 'react';
import Table from '../components/Table';
import Header from '../components/Header';
import FiltersForm from '../components/FiltersForm';
import Filters from '../components/Filters';
import PlanetsContext from '../context/PlanetsContext';
import Loading from '../components/Loading';

export default function Home() {
  const { isLoading } = useContext(PlanetsContext);
  return (
    <>
      <Header />
      <FiltersForm />
      <Filters />
      { isLoading ? <Loading /> : <Table /> }
    </>
  );
}
