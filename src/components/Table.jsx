import React from 'react';
import PlanetsTable from './PlanetsTable';
import HeaderTable from './HeaderTable';

function Table() {
  return (
    <div>
      <table className="table-container">
        <HeaderTable />
        <PlanetsTable />
      </table>
    </div>

  );
}

export default Table;
