import React from 'react';
import './App.css';
import Provider from './Provider';
import Table from './components/Table';
import Filter from './components/Filter';
import NumberFilter from './components/NumberFilter';

function App() {
  return (
    <div>
      <Provider>
        <Filter />
        <NumberFilter />
        <Table />
      </Provider>
    </div>
  );
}

export default App;
