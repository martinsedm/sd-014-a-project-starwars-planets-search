import React from 'react';

import TabelaPlaneta from './components/TabelaPlaneta';
import ProviderTabela from '../provider/ProviderTabela';

function App() {
  return (
    <ProviderTabela>
      <h1>Star Wars Planet</h1>
      <TabelaPlaneta />
    </ProviderTabela>
  );
}

export default App;
