import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// import './App.css';
import Home from './pages/Home';
import StarProvider from './context/StarProvider';

function App() {
  return (
    <StarProvider>
      {/* <Home /> */}
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ Home } />
        </Switch>
      </BrowserRouter>
    </StarProvider>
  );
}

export default App;
