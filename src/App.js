import React from 'react';
import './App.css';
import FilterNumber from './component/FilterNumber';
import Filters from './component/Filters';
import SelectedFilter from './component/SelectedFilter';
import SortSelect from './component/SortSelect';
import Table from './component/Table';
import ProviderStar from './context/ProviderStar';

function App() {
  return (
    <ProviderStar>
      <Filters />
      <FilterNumber />
      <SelectedFilter />
      <SortSelect />
      <Table />
    </ProviderStar>
  );
}

export default App;
