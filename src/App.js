import React from 'react';
import './App.css';
import StarWarsPlanetsProvider from './context/StarWarsPlanetsProvider';
import Table from './components/table/Table';
import Header from './components/header/Header';

// Tinha feito até o requisito 5 quando estava na turma 13B, tava tentando fazer de outro modo, mas não deu certo. Ref:https://github.com/tryber/sd-013-b-project-starwars-planets-search/pull/125

function App() {
  return (
    <StarWarsPlanetsProvider>
      <Header />
      <br />
      <Table />
    </StarWarsPlanetsProvider>
  );
}

export default App;
