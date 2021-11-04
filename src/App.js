import React from 'react';
import './App.css';
import Table from './components/Table';
import StarwarsProvider from './context/StarwarsProvider';

function App() {
  return (
    <span>
      <StarwarsProvider>
        Hello, Appp!
        <Table />
      </StarwarsProvider>
    </span>
  );
}

export default App;
