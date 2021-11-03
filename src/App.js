import React from 'react';
import './App.css';
import Home from './components/Home';
import StarWarsProvider from './context/StarWarsProvider';

function App() {
  return (
    <div>
      <StarWarsProvider>
        <Home />
      </StarWarsProvider>

    </div>
  );
}

export default App;
