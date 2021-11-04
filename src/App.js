import React from 'react';
import Table from './components/Table';
import './App.css';
import AppProvider from './context/AppProvider';

function App() {
  document.title = 'StarWars - Planet Search';
  return (
    <AppProvider>
      <Table />
    </AppProvider>
  );
}

export default App;
