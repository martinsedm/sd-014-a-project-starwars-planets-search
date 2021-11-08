import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import TableContext from './contextPages';
import fetchApi from './apiService';

function TableProvider({ children }) {
  const [data, setData] = useState([{}]);
  useEffect(() => {
    async function receiveData() {
      const receive = await fetchApi();
      setData(receive.results);
    }

    receiveData();
  }, []);

  return (
    <div>
      <TableContext.Provider value={ { data } }>
        {children}
      </TableContext.Provider>
    </div>

  );
}

TableProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default TableProvider;
