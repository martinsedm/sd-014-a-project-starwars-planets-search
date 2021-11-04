import React from 'react';

import StarWarsProvider from './context/StarWarsProvider';
import Page from './Page';

function App() {
  return (
    <StarWarsProvider>
      <Page />
    </StarWarsProvider>
  );
}

export default App;
