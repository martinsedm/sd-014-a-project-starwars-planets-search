import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';
import fetchStarWars from '../services/fetchStarWars';
import { TYPEFILTER } from '../data/data';

function StarWarsProvider({ children }) {
  const [data, setData] = useState([]);
  const [name, setName] = useState('');
  const [trigger, setTrigger] = useState(false);
  const [typeOfFilters, setTypeOfFilters] = useState(TYPEFILTER);
  const [filterPlanetName, setFilterPlanetName] = useState([]);
  const [tableForm, setTableForm] = useState(
    { column: '', comparison: '', value: 0 },
  );
  const [filters, setFilters] = useState({
    filterByName: {
      name,
    },
    filterByNumericValues: [],
    order: {
      column: 'name',
      sort: '',
    },
  });

  const filterNumericValue = (coluna, compara, numero) => {
    switch (compara) {
    case 'maior que':
      return setFilterPlanetName(filterPlanetName
        .filter((planet) => Number(planet[coluna]) > Number(numero)));
    case 'menor que':
      return setFilterPlanetName(filterPlanetName
        .filter((planet) => Number(planet[coluna]) < Number(numero)));
    case 'igual a':
      return setFilterPlanetName(filterPlanetName
        .filter((planet) => Number(planet[coluna]) === Number(numero)));
    default:
      return setFilterPlanetName(filterPlanetName);
    }
  };

  const removeColumnAndAttFilters = (coluna, compara, numero) => {
    filterNumericValue(coluna, compara, numero);
    setFilters({ ...filters,
      filterByNumericValues: [...filters.filterByNumericValues, tableForm] });
    return typeOfFilters.includes(coluna)
      ? setTypeOfFilters(typeOfFilters.filter((type) => type !== coluna)) : typeOfFilters;
  };

  const removeFilter = (column) => {
    setTypeOfFilters([column, ...typeOfFilters]);
    const filterWithoutColumn = filters.filterByNumericValues
      .filter((item) => item.column !== column);

    setFilters({ ...filters,
      filterByNumericValues: [...filterWithoutColumn] });

    return trigger ? setTrigger(false) : setTrigger(true);
  };

  const filterPlanet = () => {
    const lowerName = name.toLowerCase();
    const filteredPlanet = data
      .filter((planet) => planet.name.toLowerCase().includes(lowerName));
    setFilterPlanetName(filteredPlanet);
  };

  const removeX = () => {
    setFilterPlanetName(data);
    if (filters.filterByNumericValues.length > 0) {
      filters.filterByNumericValues
        .forEach((item) => filterNumericValue(item.column, item.comparison, item.value));
    }
  };

  const fetchDataSW = async () => {
    const response = await fetchStarWars();
    setData(response);
  };

  useEffect(() => {
    fetchDataSW();
  }, []);

  useEffect(filterPlanet, [data, name]);
  useEffect(removeX, [trigger]);

  const contextValue = {
    data,
    setName,
    name,
    filters,
    setFilters,
    filterPlanetName,
    setFilterPlanetName,
    trigger,
    setTrigger,
    filterNumericValue,
    removeColumnAndAttFilters,
    typeOfFilters,
    removeFilter,
    tableForm,
    setTableForm,
  };

  return (
    <StarWarsContext.Provider value={ contextValue }>
      {children}
    </StarWarsContext.Provider>
  );
}

StarWarsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default StarWarsProvider;
