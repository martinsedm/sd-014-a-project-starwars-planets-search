import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';

const URL = 'https://swapi-trybe.herokuapp.com/api/planets/';

function StarWarsProvider({ children }) {
  const [data, setData] = useState([]);
  const [name, setName] = useState('');
  const [colum, setColum] = useState('');
  const [compare, setCompare] = useState('');
  const [number, setNumber] = useState(0);

  const handleChangeName = (e) => {
    setName(e.target.value);
  };

  const handleChangeColum = (e) => {
    setColum(e.target.value);
  };

  const handleChangeComparison = (e) => {
    setCompare(e.target.value);
  };

  const handleChangeNumber = (e) => {
    setNumber(e.target.value);
  };

  const fetchData = async () => {
    const reponse = await fetch(URL);
    const { results } = await reponse.json();
    setData(results);
  };

  useEffect(() => {
    fetchData();
  }, []);

  /* useEffect(() => {
    filt();
  }, [name]);

  useEffect(() => {
    setData(Filters(colum, compare, number));
  }, [colum, compare, number]); */

  const contextValue = {
    filters: {
      filterByName: {
        name,
      },
      filterByNumericValues: [
        {
          colum,
          compare,
          number,
        },
      ],
    },
    data,
    handleChangeName,
    handleChangeColum,
    handleChangeComparison,
    handleChangeNumber,
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
