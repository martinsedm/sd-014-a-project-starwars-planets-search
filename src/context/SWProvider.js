import React, { useState } from 'react';
import PropTypes from 'prop-types';
import SWContext from './SWContext';

function SWProvider({ children }) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState('');
  const [filteredData, setFilteredData] = useState([]);
  const [filters, setFilters] = useState({ filterByName: '' });

  const fetchData = async () => {
    try {
      setIsLoading(true);
      const newData = await (await fetch('https://swapi-trybe.herokuapp.com/api/planets/')).json();
      setData(newData.results);
      setFilteredData(newData.results);
      setIsLoading(false);
    } catch (error) {
      setErrorMsg(error);
      console.log(errorMsg);
    }
  };

  const filterData = () => {
    let newData = data.filter((p) => (
      (p.name).toLowerCase()).includes(filters.filterByName));
    if (filters.filterByNumericValues) {
      switch (filters.filterByNumericValues.comparison) {
      case 'maior que':
        newData = data.filter((p) => Number(p[filters.filterByNumericValues.column])
        > Number(filters.filterByNumericValues.value));
        break;
      case 'menor que':
        newData = data.filter((p) => Number(p[filters.filterByNumericValues.column])
        < Number(filters.filterByNumericValues.value));
        break;
      case 'igual a':
        newData = data.filter((p) => Number(p[filters.filterByNumericValues.column])
        === Number(filters.filterByNumericValues.value));
        break;
      default:
        break;
      }
    }
    setFilteredData(newData);
  };

  return (
    <SWContext.Provider
      value={ {
        filteredData,
        isLoading,
        fetchData,
        filterData,
        setFilters,
        filters } }
    >
      {children}
    </SWContext.Provider>
  );
}

SWProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SWProvider;
