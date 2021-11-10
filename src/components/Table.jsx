import React from 'react';
import Context from '../context/Context';
import Filter from './Filter';

import ContentTable from './ContentTable';
import HeaderTable from './HeaderTable';

function Table() {
  const { loading } = React.useContext(Context);

  if (loading) return <div>Loading...</div>;
  return (
    <>
      <HeaderTable />
      <Filter />
      <ContentTable />
    </>
  );
}

export default Table;
