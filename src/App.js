import React from 'react';
import './App.css';
import Table from './components/Table';
import Header from './components/Header';
import FilterInputByName from './components/FilterInputByName';
import FiltersInputsNumerics from './components/FiltersInputsNumerics';
import StarWarsProvider from './context/StarWarsProvider';
import DeleteFilter from './components/DeleteFilter';

function App() {
  return (
    <StarWarsProvider>
      <Header />
      <FilterInputByName />
      <FiltersInputsNumerics />
      <DeleteFilter />
      <Table />
    </StarWarsProvider>
  );
}

export default App;
