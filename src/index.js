import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import StarwarsProvider from './Context/StarwarsProvider';

ReactDOM.render(
  <StarwarsProvider>
    <App />
  </StarwarsProvider>,
  document.getElementById('root'),
);
