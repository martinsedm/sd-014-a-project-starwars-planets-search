import React, { useContext, useEffect } from 'react';
import PlanetsContext from './Context/PlanetsContext';
import './App.css';
import Header from './Components/Header';
import Table from './Components/Table';
import Loading from './Components/Loading'

function App() {
  const { isLoading, fetchAPI } = useContext(PlanetsContext);

  useEffect(() => {
    fetchAPI();
  }, []);

  return (
    <main>
      <Header />
      {isLoading ? <Loading /> : <Table />}
    </main>
  );
}

export default App;
