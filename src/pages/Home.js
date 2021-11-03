import React, { useContext, useEffect } from 'react';
import Header from '../components/Header';
import TableRender from '../components/TableRender';
import StarsWarsContext from '../contexts/StarWarsContext';

function Home() {
  const {
    // planets,
    planetsRender,
    isFetching,
    error,
    getPlanets } = useContext(StarsWarsContext);

  useEffect(() => {
    getPlanets();
  }, [getPlanets]);

  const { hasError, message } = error;
  // (planets);
  return (
    <main>
      <Header />
      { isFetching && <h3>Carregando...</h3> }
      { !isFetching && planetsRender.length > 0 && <TableRender />}
      { !isFetching && hasError && <p>{ message }</p> }
    </main>
  );
}

export default Home;
