import React from 'react';
import Table from './components/Table';
import './App.css';
import Provider from './context/Provider';
import FilterInput from './components/FilterInput';
import FiltersSettings from './components/FiltersSettings';
import SavedFilters from './components/SavedFilters';

function App() {
  return (
    <Provider>
      <h1>Projeto Star Wars - Trybe!</h1>
      <FilterInput />
      <FiltersSettings />
      <SavedFilters />
      <Table />
    </Provider>
  );
}

export default App;
