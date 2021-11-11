import React from 'react';

import TableComponent from './TableComponent';
import InputComponent from './InputComponent';
import NumberFilter from './NumberFilter';

export default function Rendered() {
  return (
    <>
      <h2 className="display-1 text-center">Projeto Star Wars - Trybe</h2>
      <InputComponent />
      <NumberFilter />
      <TableComponent />
    </>
  );
}
