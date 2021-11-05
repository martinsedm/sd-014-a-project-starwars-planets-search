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
  const [filtro, setFiltro] = useState([]);
  const [multFilter, setMultFilter] = useState([]);

  const filtros = {
    filters: {
      filterByName: {
        name: nameFilter,
      },
      filterByNumericValues: filtro,
    },
  };

  const switcher = (param, col, val) => {
    switch (param) {
    case 'maior que':
      return data.filter((cur) => cur[col] > Number(val));
    case 'menor que':
      return data.filter((cur) => cur[col] < Number(val));
    case 'igual a':
      return data.filter((cur) => cur[col] === Number(val));
    default: return data;
    }
  };

  const numericFilter = () => {
    const { filterByNumericValues } = filtros.filters;
    
    const arr = [];
    if (filtro.length === 0) {
      return data;
    } if (filtro.length === 1) {
      const maior = data.filter((cur) => cur[filterByNumericValues[0].column] > Number(valor));
      const menor = data.filter((cur) => cur[filterByNumericValues[0].column] <= valor);
      const igual = data.filter((cur) => cur[filterByNumericValues[0].column] === valor);
      // switcher(filtro[0].comparison,
      //   filtro[0].column, filtro[0].value);
      switch (filterByNumericValues[0].comparison) {
      case 'maior que':
        return maior;
      case 'menor que':
        return menor;
      case 'igual a':
        return igual;
      default: return data;
      }
    } else {
      
    }
  };

  const planetasFiltrados = () => {
    // console.log(coluna, comparacao, valor, filtrado);
    const filtroA = numericFilter().filter((cur) => cur.name.includes(nameFilter));
    // if (!filtrado) {
    return filtroA;
    // }
    // switch (comparacao) {
    // case 'maior que':
    //   return filtroA.filter((cur) => cur[coluna] > Number(valor));
    // case 'menor que':
    //   return data.filter((cur) => cur.name.includes(nameFilter) && cur[coluna] <= valor);
    // case 'igual a':
    //   return data.filter((cur) => cur.name.includes(nameFilter) && cur[coluna] === valor);
    // default: return data;
    // }
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
    comparacao,
    valor,
    filtros,
    filtro,
    setFiltro,
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
