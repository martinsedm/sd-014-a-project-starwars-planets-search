import React from 'react';
import './App.css';

import Provider from './context/Provider';
import Table from './components/Table';
import NameFilter from './components/NameFilter';
import ValueFilter from './components/ValueFilter';
import OrderForm from './components/OrderForm';
import Filters from './components/Filters';

function App() {
  return (
    <Provider>
      <h1>Projeto Star Wars - Trybe</h1>
      <NameFilter />
      <ValueFilter />
      <OrderForm />
      <Filters />
      <Table />
    </Provider>
  );
}

export default App;
