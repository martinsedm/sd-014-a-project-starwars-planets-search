import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import SWContext from './SWContext';

function SWProvider({ children }) {
  const [data, setData] = useState([]);
  const [arrayFiltered, setArrayFiltered] = useState();
  const [infoIsLoaded, setInfoIsLoaded] = useState(false);
  const [thead, setThead] = useState([]);
  const [filters, setFilters] = useState({
    filterByName: {
      name: '',
    },
  });

  const changeFilters = ({ target: { name, value } }) => {
    setFilters({
      filterByName: {
        ...filters.filterByName,
        [name]: value,
      },
    });
  };

  useEffect(() => {
    setArrayFiltered(data
      .filter((item) => item.name.includes(filters.filterByName.name)));
  }, [data, filters]);

  const planetsAPI = async () => {
    const planets = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
    return planets.json()
      .then((response) => {
        response.results.map((i) => delete i.residents);
        return response.results;
      });
  };

  useEffect(() => {
    planetsAPI().then((result) => {
      setData(result);
      setArrayFiltered(result);
      setInfoIsLoaded(true);
      setThead(Object.keys(result[0]).map((i) => (
        (i === 'rotation_period' && 'Rotation Period')
          || (i === 'orbital_period' && 'Orbital Period')
          || (i === 'surface_water' && 'Surface Water')
          || (i === 'url' && 'URL')
          || (i.replace(i[0], i[0].toLocaleUpperCase()))
      )));
    });
  }, []);

  return (
    <SWContext.Provider
      value={ { arrayFiltered, changeFilters, infoIsLoaded, filters, thead } }
    >
      {children}
    </SWContext.Provider>
  );
}

SWProvider.propTypes = {
  children: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default SWProvider;
