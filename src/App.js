import React from 'react';
import StarwarsProvider from './Provider/StarwarsProvider';
import Home from './Pages/Home';

function App() {
  return (
    <StarwarsProvider>
      <Home />
    </StarwarsProvider>
  );
}

export default App;
