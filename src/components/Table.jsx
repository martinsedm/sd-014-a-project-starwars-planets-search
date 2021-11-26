import React from 'react';
import PlanetsTable from './PlanetsTable';
import HeaderTable from './HeaderTable';

function Table() {
  return (
    <div>
      <table>
        <HeaderTable />
        <PlanetsTable />
      </table>
    </div>

  );
}

export default Table;
