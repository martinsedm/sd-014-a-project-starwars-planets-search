import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';
import '../css/Header.css';

const Filter = () => {
  const { filter: { filterByName: { name } },
    setFilter, filter, filterByName } = useContext(StarWarsContext);

  const handleSearch = ({ target: { value } }) => {
    setFilter({ ...filter, filterByName: { name: value } });
    filterByName(value);
  };

  return (
    <>
      {console.log(name, 'name')}
      <input
        className="input"
        value={ name }
        onChange={ handleSearch }
        data-testid="name-filter"
      />
    </>
  );
};

export default Filter;
