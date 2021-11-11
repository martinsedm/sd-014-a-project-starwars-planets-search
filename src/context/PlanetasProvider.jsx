import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import PlanetasContext from './PlanetasContext';
import DataPlanetasAPI from '../services/DataPlanetasAPI';

function PlanetasProvider({ children }) {
  const INITIAL_STATE = {
    filtraPeloNome: {
      name: '',
    },
  };

  const [planetas, setPlanetas] = useState([]);
  const [isCarregando, setCarregando] = useState(true);
  const [name, setName] = useState('');
  const [filtrar, setFiltrar] = useState(INITIAL_STATE);

  const fetchPlanetasAPI = async () => {
    const { results } = await DataPlanetasAPI();
    setPlanetas(results);
    setCarregando(false);
  };

  useEffect(() => {
    fetchPlanetasAPI();
  }, []);

  const handleChange = ({ target: { value } }) => {
    setFiltrar({
      ...filtrar,
      filtraPeloNome: {
        name: value,
      },
    });
    setName(value);
  };

  const planetasFiltrados = planetas.filter((planeta) => (
    planeta.name.toLowerCase().includes(filtrar.filtraPeloNome.name.toLowerCase())
  ));

  const contextState = {
    planetas,
    isCarregando,
    planetasFiltrados,
    handleChange,
    name,
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
