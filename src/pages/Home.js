import React, { useContext, useEffect, useState } from 'react';
import getData from '../api';
import GlobalContext from '../context';
import Table from '../Table';

const Home = () => {
  const {
    starWarsData,
    setStarWarsData,
    headers,
    setHeaders } = useContext(GlobalContext);

  const [renderedList, setRenderedList] = useState([]);
  const [filterByName, setFilterByName] = useState('');
  const [filterByNumber, setFilterByNumber] = useState({
    column: 'population', comparison: 'maior que', value: 0,
  });

  useEffect(() => {
    getData().then((data) => {
      setStarWarsData({
        ...data,
        filters: {
          filterByName: { value: '' },
          filterByNumericValues: [filterByNumber] },
      });
      setHeaders(Object.keys(data.results[0]));
      setRenderedList(data.results);
    });
  }, [filterByNumber, setHeaders, setStarWarsData]);

  const handleSearch = ({ target: { value } }) => {
    setFilterByName({ value });
    setStarWarsData({
      ...starWarsData,
      filters: { ...starWarsData.filters, filterByName: { value } },
    });
  };

  const handleFilterByNumber = ({ target: { name, value } }) => {
    setFilterByNumber({ ...filterByNumber, [name]: value });
    setStarWarsData({ ...starWarsData,
      filters: {
        ...starWarsData.filters,
        filterByName,
        filterByNumericValues: [{ ...filterByNumber, [name]: value }],
      } });
  };

  let filteredList = null;

  const executeFilterByNumber = () => {
    const { column, comparison, value } = starWarsData.filters.filterByNumericValues[0];
    switch (comparison) {
    case 'maior que':
      filteredList = starWarsData.results
        .filter((planet) => Number(planet[column]) > Number(value));
      break;
    case 'menor que':
      filteredList = starWarsData.results
        .filter((planet) => Number(planet[column]) < Number(value));
      break;
    case 'igual a':
      filteredList = starWarsData.results
        .filter((planet) => Number(planet[column]) === Number(value));
      break;
    default:
      filteredList = undefined;
    }
  };

  return (
    <div>
      <h2>Star Wars Planets Search</h2>
      <input data-testid="name-filter" onChange={ handleSearch } type="text" />

      <select
        data-testid="column-filter"
        name="column"
        onChange={ handleFilterByNumber }
      >
        <option value="population">population</option>
        <option value="orbital_period">orbital_period</option>
        <option value="diameter">diameter</option>
        <option value="rotation_period">rotation_period</option>
        <option value="surface_water">surface_water</option>
      </select>

      <select
        data-testid="comparison-filter"
        name="comparison"
        onChange={ handleFilterByNumber }
      >
        <option value="maior que">maior que</option>
        <option value="menor que">menor que</option>
        <option value="igual a">igual a</option>
      </select>

      <input
        data-testid="value-filter"
        name="value"
        onChange={ handleFilterByNumber }
        type="number"
      />
      <button
        type="button"
        data-testid="button-filter"
        onClick={ () => {
          executeFilterByNumber();
          setRenderedList(filteredList);
        } }
      >
        Filtrar
      </button>

      {headers && starWarsData.results && (
        <Table
          headers={ headers.filter((header) => header !== 'residents') }
          data={
            starWarsData.filters.filterByName.value
              ? renderedList
                .filter((p) => p.name.includes(starWarsData.filters.filterByName.value))
              : renderedList
          }
        />
      )}
    </div>
  );
};

export default Home;
