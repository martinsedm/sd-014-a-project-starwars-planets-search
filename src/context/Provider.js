import React from 'react';
import PropTypes from 'prop-types';
import Context from './Context';

const Provider = ({ children }) => {
  const [data, setData] = React.useState([]);
  const [render, setRender] = React.useState([]);
  const [objectTitle, setObjectTitle] = React.useState();
  const [loading, setLoading] = React.useState(true);

  const getPlanetsData = async () => {
    const endpoint = 'https://swapi-trybe.herokuapp.com/api/planets/';
    const { results } = await fetch(endpoint).then((value) => value.json());
    setData(results);
    setRender(results);
    delete results[0].residents;
    const renderKeys = Object.keys(results[0]);
    setObjectTitle(renderKeys);
    setLoading(false);
  };

  React.useEffect(() => {
    getPlanetsData();
  }, []);

  const context = {
    getPlanetsData,
    data,
    setData,
    render,
    setRender,
    objectTitle,
    loading,
    setLoading,

  };

  return (
    <Context.Provider value={ context }>
      { children }
    </Context.Provider>
  );
};

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
