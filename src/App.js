
import React from 'react';
import './App.css';
import Table from './Components/Table';
import { Provider } from './context/Provider';
import Filters from './Components/Filters';

function App() {
  return (
    <span>Hello, App!</span>
    <Provider>
      <Filters />
      <Table />
    </Provider>
  );
}

export default App;
