import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import PlanetsContext from './PlanetsContext';
import fetchPlanetsApi from '../services/planetsApi';

function Provider({ children }) {
  const [data, setData] = useState([]);
  const [column, setColumn] = useState('');
  const [comparison, setComparison] = useState('');
  const [value, setValue] = useState('');
  const [options, setOptions] = useState([
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ]);

  const [filter, setFilter] = useState({
    filters: {
      filterByName: {
        name: '',
      },
      filterByNumericValues: [],
    },
  });

  // Executa a função fetchApi quando a página é carregada
  useEffect(() => {
    const fetchAPi = async () => {
      const responseApi = await fetchPlanetsApi();
      setData(responseApi.results); // Salva resposta da API na variável data
    };
    fetchAPi();
  }, []);

  const context = {
    data,
    setData,
    filter,
    setFilter,
    column,
    setColumn,
    comparison,
    setComparison,
    value,
    setValue,
    options,
    setOptions,
  };

  return (
    // Provider irá prover as informações para todos os componentes filhos
    // Componentes filhos: todos dentro de App.js
    <PlanetsContext.Provider value={ context }>
      { children }
    </PlanetsContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
