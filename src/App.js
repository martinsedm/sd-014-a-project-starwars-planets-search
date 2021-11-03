import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import StarsWarsProvider from './contexts/StarWarsProvider';
import Home from './pages/Home';

import './App.css';

function App() {
  return (
    <StarsWarsProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route>
            <Redirect to="/" />
          </Route>
        </Switch>
      </BrowserRouter>
    </StarsWarsProvider>
  );
}

export default App;
