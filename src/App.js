import React from 'react';
import './App.css';
import ActiveFilters from './components/ActiveFilters';
import FilterName from './components/FilterName';
import FilterNum from './components/FilterNum';
import Table from './components/Table';
import Provider from './context/Provider';

function App() {
  return (
    <Provider>
      <div>
        <FilterName />
        <FilterNum />
        <ActiveFilters />
        <Table />
      </div>
    </Provider>
  );
}

export default App;
