import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import PlanetsContext from './PlanetsContext';

function PlanetsProvider({ children }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filteredData, setFilteredData] = useState([]);
  const [name, setName] = useState('');
  const [filters, setFilters] = useState({
    filterByName: '',
    filterByNumericValues: [{ column: '', comparison: '', value: '' }],
  });
  const [categories, setCategories] = useState([
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ]);

  const fetchData = async () => {
    const URL = 'https://swapi-trybe.herokuapp.com/api/planets/';
    try {
      setLoading(true);
      const result = await fetch(URL);
      const json = await result.json();
      setData(json.results);
      setFilteredData(json.results);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    setFilters({
      ...filters,
      filterByName: name.toLowerCase(),
    });
  }, [name]);

  // Esta parte foi feita com ajuda de consulta do codigo do colega Cesar Meira
  const filterData = () => {
    let newData = data.filter((pl) => (
      (pl.name).toLowerCase()).includes(filters.filterByName));
    if (filters.filterByNumericValues.length > 0) {
      filters.filterByNumericValues.forEach((filter) => {
        switch (filter.comparison) {
        case 'maior que':
          newData = newData.filter((pl) => Number(pl[filter.column])
          > Number(filter.value));
          break;
        case 'menor que':
          newData = newData.filter((pl) => Number(pl[filter.column])
          < Number(filter.value));
          break;
        case 'igual a':
          newData = newData.filter((pl) => Number(pl[filter.column])
          === Number(filter.value));
          break;
        default:
          break;
        }
      });
    }
    setFilteredData(newData);
  };

  const filterCategories = () => {
    const numericFilter = filters.filterByNumericValues;
    setCategories(categories.filter((
      (cat) => cat !== numericFilter[numericFilter.length - 1].column)));
  };

  useEffect(() => {
    filterData();
    filterCategories();
  }, [filters]);

  return (
    <PlanetsContext.Provider
      value={ {
        filteredData,
        loading,
        fetchData,
        setFilters,
        filters,
        categories,
        name,
        setName,
      } }
    >
      {children}
    </PlanetsContext.Provider>
  );
}

PlanetsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PlanetsProvider;
