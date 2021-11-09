import React from 'react';
import Table from './Components/Table';
import Provide from './ContextAPI/Provide';
import './App.css';
import Input from './Components/Input';
import NumberFilter from './Components/NumberFilter';

function App() {
  return (
    <Provide>
      <Input />
      <NumberFilter />
      <Table />
    </Provide>
  );
}

export default App;
