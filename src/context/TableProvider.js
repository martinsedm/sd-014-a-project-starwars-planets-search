import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import TableContext from './TableContext';

function TableProvider({ children }) {
  const [response, setReponse] = useState({
    data: [],
  });

  const requestApi = async () => {
    const url = 'https://swapi-trybe.herokuapp.com/api/planets/';
    const fetchUrl = await fetch(url);
    const responseApi = await fetchUrl.json();
    console.log(responseApi);
    setReponse({
      data: responseApi.results,
    });
  };

  useEffect(() => {
    requestApi();
  }, []);

  const context = { response };
  return (
    <TableContext.Provider value={ context }>
      { children }
    </TableContext.Provider>
  );
}

TableProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export default TableProvider;
