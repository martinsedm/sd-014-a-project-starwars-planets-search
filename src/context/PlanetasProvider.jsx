import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import PlanetasContext from './PlanetasContext';
import DataPlanetasAPI from '../services/DataPlanetasAPI';

function PlanetasProvider({ children }) {
  const INITIAL_STATE = {
    filtrarPeloNome: {
      name: '',
    },
    filtrarValoresNumericos: [
      {
        column: 'population',
        comparison: 'maior que',
        value: '',
      },
    ],
  };

  const [planetas, setPlanetas] = useState([]);
  const [isCarregando, setCarregando] = useState(true);
  const [filtrar, setFiltrar] = useState(INITIAL_STATE);
  const [rendirizarPlanetas, setRendirizarPlanetas] = useState([]);
  const [column, setColumn] = useState('population');
  const [comparison, setComparison] = useState('maior que');
  const [value, setValue] = useState(0);

  const fetchPlanetasAPI = async () => {
    const { results } = await DataPlanetasAPI();
    setPlanetas(results);
    setRendirizarPlanetas(results);
    setCarregando(false);
  };

  useEffect(() => {
    fetchPlanetasAPI();
  }, []);

  const handleChange = ({ target }) => {
    setFiltrar({
      ...filtrar,
      filtrarPeloNome: {
        name: target.value,
      },
    });
    const exibirPlanetasFiltrados = planetas.filter((planeta) => (
      planeta.name.toLowerCase().includes(target.value)));
    setRendirizarPlanetas(exibirPlanetasFiltrados);
  };

  const planetasFiltrados = () => {
    const filtrados = planetas.filter((planeta) => {
      if (!value) return planeta;
      if (comparison === 'maior que') return Number(planeta[column]) > Number(value);
      if (comparison === 'menor que') return Number(planeta[column]) < Number(value);
      if (comparison === 'igual a') return Number(planeta[column]) === Number(value);
      return filtrados;
    });
    setRendirizarPlanetas(filtrados);
  };

  const removerNumerosFiltrados = (parametro) => {
    const filtrosAtualizados = filtrar.filtrarValoresNumericos
      .filter((objeto) => objeto.column !== parametro);
    setFiltrar({
      ...filtrar,
      filtrarValoresNumericos: filtrosAtualizados,
    });
    setRendirizarPlanetas(planetas);
  };

  const contextState = {
    planetas,
    isCarregando,
    rendirizarPlanetas,
    filtrar,
    column,
    comparison,
    value,
    setFiltrar,
    setColumn,
    setComparison,
    setValue,
    handleChange,
    planetasFiltrados,
    removerNumerosFiltrados,
  };

  return (
    <PlanetasContext.Provider value={ contextState }>
      { children }
    </PlanetasContext.Provider>
  );
}

PlanetasProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PlanetasProvider;
