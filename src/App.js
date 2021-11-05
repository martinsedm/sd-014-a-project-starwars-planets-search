import React from 'react';
import Table from './Components/Table';
import FilterByName from './Components/FilterByName';
import FilterByValues from './Components/FilterByValues';
import Provider from './Context/Provider';
import './App.css';

function App() {
  return (
    <Provider>
      <FilterByName />
      <FilterByValues />
      <Table />
    </Provider>
  );
}

// Meus agradecimentos aos amigos
// @LuizFJP, @ygormaiac e @Murilo-Rainho
// por todo o apoio e ajuda que recebi neste projeto;
// e por todas as horas de prazerosos bate-papos.
// Vocês são demais! <3

export default App;
