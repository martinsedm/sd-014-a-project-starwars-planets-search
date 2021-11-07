import React, { useContext } from 'react';
import Table from '../components/Table';
import PlanetsContext from '../context/PlanetsContext';
import Loading from '../components/Loading';

function Home() {
  const { data } = useContext(PlanetsContext);
  console.log(data);
  // useEffect(() => console.log(teste), [teste]);
  return data.length < 1 ? <Loading /> : (
    <div>
      <Table planets={ data.results } />
    </div>
  );
}

export default Home;
