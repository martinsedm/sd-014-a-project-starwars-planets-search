import React from 'react';
import './App.css';

import Table from './components/Table';
import Provider from './context/Provider';

export default function App() {
  return (
    <Provider>
      <h1 className="font-semibold text-4xl text-center mt-4">Starwars Planets Search</h1>
      <Table />
    </Provider>
  );
}
