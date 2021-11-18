import React from 'react';
import './App.css';
import StarWarsProvider from './context/StarWarsProvider';
import PlanetsTable from './components/PlanetsTable';

export default function App() {
  return (
    <StarWarsProvider>
      <h1>Star Wars Planets</h1>
      <PlanetsTable />
    </StarWarsProvider>
  );
}
