import React from 'react';
import './App.css';

import { PlanetProvider } from './Context/PlanetProvider';

import Table from './Components/PlanetsTable';
import TextFilter from './Components/FilterForms';
import NumericFilter from './Components/NumericFilter';
import FilterDisableButton from './Components/FilterDisableButton';
import FilterByOrder from './Components/FilterByOrder';

function App() {
  return (
    <PlanetProvider>
      <TextFilter />
      <NumericFilter />
      <FilterByOrder />
      <FilterDisableButton />
      <Table />
    </PlanetProvider>
  );
}

export default App;
