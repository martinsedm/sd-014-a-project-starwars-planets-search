import React from 'react';
import './App.css';
import Provider from './context/provider';
import Header from './components/Header';
import Table from './components/Table';

function App() {
  return (
    <Provider>
      <Header />
      <Table />
    </Provider>
  );
}

export default App;
