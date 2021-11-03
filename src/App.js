import React from 'react';
import './App.css';
import TableComponent from './components/TableComponent';
import StarsProvider from './context/StarsProvider';

function App() {
  return (
    <StarsProvider>
      {/* <FormComponent /> */}
      <TableComponent />
    </StarsProvider>
  );
}

export default App;
