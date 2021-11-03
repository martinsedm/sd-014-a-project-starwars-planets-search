import React from 'react';

import SWProvider from './context/SWProvider';
import Table from './components/Table';

import './App.css';

/**
 * App - The main component of the Star Wars app.
 * @returns {JSX.Element}
 */
const App = () => (
  <SWProvider>
    <Table />
  </SWProvider>
);

export default App;
