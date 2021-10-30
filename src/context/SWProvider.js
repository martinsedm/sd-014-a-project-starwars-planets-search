import React, { useState } from 'react';
import PropTypes from 'prop-types';
import SWContext from './SWContext';

function SWProvider({ children }) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState('');
  const [filteredData, setFilteredData] = useState([]);

  const fetchData = async () => {
    try {
      setIsLoading(true);
      const newData = await (await fetch('https://swapi-trybe.herokuapp.com/api/planets/')).json();
      setData(newData.results);
      setFilteredData(newData.results);
      setIsLoading(false);
      console.log('fetched!');
    } catch (error) {
      setErrorMsg(error);
      console.log(errorMsg);
    }
  };

  const filterByName = (name) => {
    const newData = data.filter((planet) => ((planet.name).toLowerCase()).includes(name));
    setFilteredData(newData);
  };

  return (
    <SWContext.Provider value={ { filteredData, isLoading, fetchData, filterByName } }>
      {children}
    </SWContext.Provider>
  );
}

SWProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SWProvider;
