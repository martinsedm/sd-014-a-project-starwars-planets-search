import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import APIContext from './APIContext';

function APIProvider({ children }) {
  const [data, setData] = useState([]);
  const [isLoad, setLoad] = useState(true);
  const [headers, setheaders] = useState([]);
  const [nameFilter, setNameFilter] = useState('');
  const [filtrado, setFiltrado] = useState(false);
  const [coluna, setColuna] = useState('population');
  const [comparacao, setComparacao] = useState('maior que');
  const [valor, setValor] = useState(0);

  // const filtros = {
  //   filters: {
  //     filterByName: {
  //       name: nameFilter,
  //     },
  //   },
  // };

  const planetasFiltrados = () => {
    console.log(coluna, comparacao, valor, filtrado);
    const filtroA = data.filter((cur) => cur.name.includes(nameFilter));
    if (!filtrado) {
      return filtroA;
    }
    switch (comparacao) {
    case 'maior que':
      return filtroA.filter((cur) => cur[coluna] > Number(valor));
    case 'menor que':
      return data.filter((cur) => cur.name.includes(nameFilter) && cur[coluna] <= valor);
    case 'igual a':
      return data.filter((cur) => cur.name.includes(nameFilter) && cur[coluna] === valor);
    default: return data;
    }
  };

  useEffect(() => {
    planetasFiltrados();
  });

  const thisContext = {
    data,
    setData,
    isLoad,
    setLoad,
    headers,
    setheaders,
    planetasFiltrados,
    setNameFilter,
    setColuna,
    setComparacao,
    setValor,
    setFiltrado,
    coluna,
  };

  return (
    <APIContext.Provider value={ thisContext }>
      { children }
    </APIContext.Provider>

  );
}
APIProvider.propTypes = {
  children: PropTypes.objectOf.isRequired,
};
export default APIProvider;
