import React, { useState } from 'react';
import PropTypes from 'prop-types';
import PlanetsContext from './PlanetsContext';

function PlanetsProvider({ children }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filtered, setFiltered] = useState([]);
  const [filters, setFilters] = useState({ filterByName: '' });

  const fetchData = async () => {
    const URL = 'https://swapi-trybe.herokuapp.com/api/planets/';
    try {
      setLoading(true);
      const result = await fetch(URL);
      const json = await result.json();
      const finalData = await json.results;
      setData(finalData);
      setFiltered(finalData);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  // Ajuda do cologa de sala Cesar Meira
  const filterData = () => {
    let newData = data.filter((p) => (
      (p.name).toLowerCase()).includes(filters.filterByName));
    if (filters.x) {
      switch (filters.x.comparison) {
      case 'maior que':
        newData = data.filter((p) => Number(p[filters.x.column])
        > Number(filters.x.value));
        break;
      case 'menor que':
        newData = data.filter((p) => Number(p[filters.x.column])
        < Number(filters.x.value));
        break;
      case 'igual a':
        newData = data.filter((p) => Number(p[filters.x.column])
        === Number(filters.x.value));
        break;
      default:
        break;
      }
    }
    setFiltered(newData);
  };

  return (
    <PlanetsContext.Provider
      value={ {
        filtered,
        loading,
        fetchData,
        filterData,
        setFilters,
        filters } }
    >
      {children}
    </PlanetsContext.Provider>
  );
}

PlanetsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PlanetsProvider;
