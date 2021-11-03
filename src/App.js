import React from 'react';
import './App.css';
import Header from './components/Header';
import Table from './components/Table';
import GlobalContextProvider from './context/ContextProvider';

function App() {
  return (
    <GlobalContextProvider>
      <Header />
      <Table />
    </GlobalContextProvider>
  );
}

export default App;
