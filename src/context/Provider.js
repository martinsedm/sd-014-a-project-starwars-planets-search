import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import MyContext from '.';

function Provider({ children }) {
  const URL = 'https://swapi-trybe.herokuapp.com/api/planets/';
  const [state, setState] = useState([]);
  const [loading, setLoading] = useState(true);
  const [name, setName] = useState('');
  const filterContext = {
    filters: {
      filterByName: {
        name,
        setName,
      },
    },
  };

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
    <MyContext.Provider value={ { state, loading, filterContext } }>
      {children}
    </MyContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
