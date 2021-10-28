import React from 'react';
import './App.css';

import Main from './pages/Main';

import DataContextProvider from './context/DataContext';

function App() {
  return (
    <DataContextProvider>
      <Main />
    </DataContextProvider>
  );
}

export default App;
