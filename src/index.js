import React from 'react';
import ReactDOM from 'react-dom';
import FilterProvider from './context/FilterProvider';
import App from './App';

ReactDOM.render(
  <FilterProvider>
    <App />
  </FilterProvider>,

  document.getElementById('root'),
);
