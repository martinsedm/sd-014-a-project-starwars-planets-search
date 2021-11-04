import React from 'react';
import './App.css';
import Starwars from './components/Starwars';
import StarwarsProvider from './context/StarwarsProvider';

function App() {
  return (
    <StarwarsProvider>
      <Starwars />
    </StarwarsProvider>
  );
}

export default App;
