import React from 'react';
import Table from './components/Table';
import './App.css';
import AppProvider from './context/AppProvider';
import NameInput from './components/NameInput';
import CategorySelect from './components/CategorySelect';
import ComparisonSelect from './components/ComparisonSelect';
import QuantityInput from './components/QuantityInput';
import FilterButton from './components/FilterButton';

function App() {
  document.title = 'StarWars - Planet Search';
  return (
    <AppProvider>
      <NameInput />
      <CategorySelect />
      <ComparisonSelect />
      <QuantityInput />
      <FilterButton />
      <Table />
    </AppProvider>
  );
}

export default App;
