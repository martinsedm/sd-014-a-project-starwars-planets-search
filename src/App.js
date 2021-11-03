import React from 'react';
import './App.css';
import Table from './components/Table';
import AppProvider from './context/AppProvider';

export default function App() {
  return (
    <AppProvider>
      <Table />
    </AppProvider>
  );
}
