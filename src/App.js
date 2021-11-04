import React, { useContext } from 'react';
import PlanetContext from './context/PlanetContext';
import './App.css';
import Table from './components/Table';

function App() {
  const { isLoading } = useContext(PlanetContext);
  return (
    <div>
      {!isLoading && <Table />}
    </div>

  );
}

export default App;
