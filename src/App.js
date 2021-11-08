import React from 'react';
import './App.css';
import Provider from './context/MyProvider';
import Table from './components/Table';
import FormFiltre from './components/FormFiltre';
import FormFiltreSelect from './components/FormFiltreSelect';

function App() {
  return (
    <Provider>
      <FormFiltre />
      <FormFiltreSelect />
      <Table />
    </Provider>
  );
}

export default App;
