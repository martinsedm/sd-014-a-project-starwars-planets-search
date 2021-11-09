import React, { useState } from 'react';
import GlobalContext from './context';
import Home from './pages/Home';

const App = () => {
  const [starWarsData, setStarWarsData] = useState(null);
  const [headers, setHeaders] = useState(null);

  return (
    <GlobalContext.Provider
      value={ { starWarsData, setStarWarsData, headers, setHeaders } }
    >
      <Home />
    </GlobalContext.Provider>
  );
};

export default App;
