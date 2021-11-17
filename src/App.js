import React from 'react';
import Table from './Components/Table';
import Provide from './ContextAPI/Provide';
import './App.css';
import Input from './Components/Input';
import NumberFilter from './Components/NumberFilter';

function App() {
  return (
    <Provide>
      <header
        className="d-flex flex-wrap align-items-center
          justify-content-center justify-content-lg-start bg-dark"
      >
        <Input />
        <NumberFilter />

      </header>
      <Table />
    </Provide>
  );
}

export default App;
