import React from 'react';
import Table from './Components/Table';
import Provide from './ContextAPI/Provide';
import './App.css';
import Input from './Components/Input';

function App() {
  return (
    <Provide>
      <Input />
      <Table />
    </Provide>
  );
}

export default App;
