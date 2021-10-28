import React from 'react';
import Table from './components/Table';
import './App.css';
import Provider from './context/Provider';

function App(props) {
  return (
    <>
    <Provider>
    <h1>Projeto Star Wars - Trybe!</h1>
    <Table />
    </Provider>
    </>
  );
}

export default App;
