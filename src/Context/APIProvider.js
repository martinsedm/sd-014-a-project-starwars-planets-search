import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import APIContext from './APIContext';

function APIProvider({ children }) {
  const opt = ['population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water'];
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
  const [opcoes, setOpcoes] = useState([...opt]);

  const filtros = {
    filters: {
      filterByName: {
        name: nameFilter,
      },
      filterByNumericValues: filtro,
    },
  };

  const firstFilter = () => {
    const { filterByNumericValues } = filtros.filters;
    const { column, value, comparison } = filterByNumericValues[0];
    const maior = data.filter((cur) => cur[column] > Number(value));
    const menor = data.filter((cur) => cur[column] < Number(value));
    const igual = data.filter((cur) => cur[column] === value);
    switch (comparison) {
    case 'maior que':
      return maior;
    case 'menor que':
      return menor;
    case 'igual a':
      return igual;
    default: return data;
    }
  };

  const numericFilter = () => {
    const { filterByNumericValues } = filtros.filters;
    if (filtro.length === 0) {
      return data;
    } if (filtro.length === 1) {
      return firstFilter();
    }
    switch (filterByNumericValues[1].comparison) {
    case 'maior que':
      return firstFilter().filter(
        (cur) => cur[filterByNumericValues[1].column] > filterByNumericValues[1].value,
      );
    case 'menor que':
      return firstFilter().filter(
        (cur) => cur[filterByNumericValues[1].column]
        <= Number(filterByNumericValues[1].value),
      );
    case 'igual a':
      return firstFilter().filter(
        (cur) => cur[filterByNumericValues[1].column] === filterByNumericValues[1].value,
      );
    default: return multFilter;
    }
  };

  const planetasFiltrados = () => {
    const filtroA = numericFilter().filter((cur) => cur.name.includes(nameFilter));
    return filtroA;
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
    opcoes,
    setOpcoes,
    filtrado,
    setMultFilter,
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
