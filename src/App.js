import React from 'react';
import './App.css';
import HomePage from './pages/HomePage';
import Provider from './context/Provider';

function App() {
  return (
    <Provider>
      <HomePage />
    </Provider>
  );
}

export default App;
