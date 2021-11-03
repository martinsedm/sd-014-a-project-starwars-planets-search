import React from 'react';
import './App.css';
import Table from './components/Table';
import GlobalContextProvider from './context/ContextProvider';

function App() {
  return (
    <GlobalContextProvider>
      <Table />
    </GlobalContextProvider>
  );
}

export default App;
