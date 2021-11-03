import React, { useContext } from 'react';
import Header from '../components/Header';
import TableRender from '../components/TableRender';
import StarsWarsContext from '../contexts/StarWarsContext';

function Home() {
  const { planets, planetsRender, isFetching, error } = useContext(StarsWarsContext);
  const { hasError, message } = error;
  console.log(planets);
  return (
    <main>
      <Header />
      { !isFetching && planetsRender.length > 0 && <TableRender />}
      { !isFetching && hasError && <p>{ message }</p> }
    </main>
  );
}

export default Home;
