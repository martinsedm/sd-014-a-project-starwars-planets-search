import React from 'react';
import './css/Home.css';

import StarWarsProvider from './context/StarWarsProvider';
import Home from './pages/Home';

function App() {
  return (
    <StarWarsProvider>
      <Home className="Home" />
    </StarWarsProvider>
  );
}

export default App;
