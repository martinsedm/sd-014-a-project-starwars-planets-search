import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import PlanetsContextProvider from './Context/PlanetsContextProvider';

ReactDOM.render(
  <PlanetsContextProvider>
    <App />
  </PlanetsContextProvider>,
  document.getElementById('root'),
);
