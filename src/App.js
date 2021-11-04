import React from 'react';

import SWProvider from './context/SWProvider';
import Table from './components/Table';
import Footer from './components/Footer';
import Header from './components/Header';

import './App.css';

/**
 * App - The main component of the Star Wars app.
 * @returns {JSX.Element}
 */
const App = () => {
  document.title = ':: Projeto Star Wars Planets ::';

  return (
    <SWProvider>
      <Header />
      <Table />
      <Footer />
    </SWProvider>
  );
};

export default App;
