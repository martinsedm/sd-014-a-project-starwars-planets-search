import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import PlanetasProvider from './context/PlanetasProvider';

ReactDOM.render(
  <PlanetasProvider>
    <App />
  </PlanetasProvider>,

  document.getElementById('root'),
);
