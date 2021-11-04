import React from 'react';
import Table from './components/Table';
import './App.css';
import AppProvider from './context/AppProvider';
import NameInput from './components/NameInput';

function App() {
  document.title = 'StarWars - Planet Search';
  return (
    <AppProvider>
      <NameInput />
      <Table />
    </AppProvider>
  );
}

export default App;
