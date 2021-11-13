import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import PlanetasContext from './PlanetasContext';
import DataPlanetasAPI from '../services/DataPlanetasAPI';

function PlanetasProvider({ children }) {
  const INITIAL_STATE = {
    filtrarPeloNome: {
      name: '',
    },

    filtrarValoresNumericos: [],
    // Referência: colaboração do Tiago Sather na logica de filtrar por ordenação.
    order: {
      column: 'name',
      sort: 'ASC',
    },
  };

  const [planetas, setPlanetas] = useState([]);
  const [isCarregando, setCarregando] = useState(true);
  const [filtrar, setFiltrar] = useState(INITIAL_STATE);
  const [rendirizarPlanetas, setRendirizarPlanetas] = useState([]);
  const [column, setColumn] = useState('population');
  const [comparison, setComparison] = useState('maior que');
  const [value, setValue] = useState(0);

  const { order } = filtrar;

  const compararValores = (a, b) => {
    const menosUm = -1;
    // comparação de String.
    if (Number.isNaN(parseInt(a, 10))) {
      if (a < b) return menosUm;
      if (a > b) return 1;
      return 0;
    }
    // comparação de Número.
    if (Number(a) < Number(b)) return menosUm;
    if (Number(a) > Number(b)) return 1;
    return 0;
  };

  const ordenarFiltro = (ordenarPlanetas, orderColumn, orderSort) => {
    const arraySort = [...ordenarPlanetas];
    if (orderSort === 'ASC') {
      arraySort.sort((a, b) => compararValores(a[orderColumn], b[orderColumn]));
    }
    if (orderSort === 'DESC') {
      arraySort.sort((b, a) => compararValores(a[orderColumn], b[orderColumn]));
    }
    setRendirizarPlanetas(arraySort);
  };

  const fetchPlanetasAPI = async () => {
    const { results } = await DataPlanetasAPI();
    setPlanetas(results);
    ordenarFiltro(results, order.column, order.sort);
    setCarregando(false);
  };

  useEffect(() => {
    fetchPlanetasAPI();
  }, []);

  const ordenarSort = (orderColumn, orderSort) => {
    setFiltrar({
      ...filtrar,
      order: {
        column: orderColumn,
        sort: orderSort,
      },
    });
    ordenarFiltro(rendirizarPlanetas, orderColumn, orderSort);
  };

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
    ordenarSort,
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
