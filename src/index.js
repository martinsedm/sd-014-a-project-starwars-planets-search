import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import StarsWarsProvider from './contexts/StarWarsProvider';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <StarsWarsProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StarsWarsProvider>,
  document.getElementById('root'),
);
// iniciando o projeto
