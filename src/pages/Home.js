import React, { useContext, useEffect } from 'react';
import Header from '../components/Header';
import FiltersForm from '../components/FiltersForm';
import RenderFilters from '../components/RenderFilters';
import TableRender from '../components/TableRender';
import StarsWarsContext from '../contexts/StarWarsContext';

function Home() {
  const {
    planets,
    planetsRender,
    isFetching,
    error,
    getPlanets } = useContext(StarsWarsContext);

  useEffect(() => {
    getPlanets();
  }, [getPlanets]);

  const { hasError, message } = error;

  return (
    <main>
      <Header />
      { planets.length > 0 && <FiltersForm /> }
      <RenderFilters />
      { isFetching && <h3>Carregando...</h3> }
      { !isFetching && planetsRender.length > 0 && <TableRender />}
      { !isFetching && hasError && <p>{ message }</p> }
    </main>
  );
}

export default Home;
