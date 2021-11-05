import React from 'react';
import Loader from './components/Loader';
import DataContextProvider from './context/DataContext';
// import './App.css';

export default function App() {
  return (
    <DataContextProvider>
      <Loader />
    </DataContextProvider>
  );
}
