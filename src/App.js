import React from 'react';

import TabelaPlaneta from '../components/TabelaPlaneta';
import ProviderTabela from '../provider/ProviderTabela';

function App() {
  return (
    <ProviderTabela>
      <TabelaPlaneta />
    </ProviderTabela>
  );
}

export default App;
