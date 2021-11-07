import React from 'react';
// import Home from './pages/Home';
import './App.css';
import Header from './components/Header';
import PlanetsFilter from './components/PlanetsFilter';
import PlantesTable from './components/PlanetsTable';
import MyProvider from './context/MyProvider';

function App() {
  return (
    <MyProvider>
      <Header />
      <PlanetsFilter />
      <PlantesTable />
    </MyProvider>
  );
}

export default App;
