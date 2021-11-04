import React, { useContext } from 'react';
import './App.css';

import Header from './componets/Header';
import NameSearch from './componets/NameSearch';
import SelectSearch from './componets/SelectSearch';
import Tables from './componets/Tables';
import StarWarsProvider from './context/StarWarsProvider';

function App() {
  return (
    <StarWarsProvider>
      <Header />
      <NameSearch />
      <SelectSearch />
      <Tables />
    </StarWarsProvider>
  );
}

export default App;
