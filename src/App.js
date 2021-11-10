import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import StarwarsProvider from './context/StarWarsProvider';
import Table from './pages/Table';

function App() {
  return (
    <StarwarsProvider>
      <BrowserRouter>
        <Switch>
          <Route path="/" component={ Table } />
        </Switch>
      </BrowserRouter>
    </StarwarsProvider>
  );
}

export default App;
