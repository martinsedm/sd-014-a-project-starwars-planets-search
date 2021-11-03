import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import MyContext from '.';

function Provider({ children }) {
  const URL = 'https://swapi-trybe.herokuapp.com/api/planets/';
  const [state, setState] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const swPlanets = async () => {
      const response = await fetch(URL)
        .then((res) => res.json());
      setState(response);
      setLoading(false);
    };
    swPlanets();
  }, []);

  return (
    <MyContext.Provider value={ { state, loading } }>
      {children}
    </MyContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
