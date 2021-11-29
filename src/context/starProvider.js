import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import StarContext from './starContext';

export default function StarProvider({ children }) {
  const [data, setData] = useState([{}]);
  const [search, setSearch] = useState('');
  const [filteredData, setFilteredData] = useState([{}]);
  const [filter, setFilter] = useState({
    filterByName: {
      name: '',
    },
    filterByNumericValues: [
      {
        column: '',
        comparison: '',
        value: '',
      },
    ],
  });

  useEffect(() => {
    const planetApi = async () => {
      const planets = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
      let results = await planets.json();
      results = results.results;
      results.forEach((result) => {
        delete result.residents;
      });
      setData(results);
    };
    planetApi();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    function nameFilter() {
      if (filter.filterByName.name !== '') {
        const filtered = data.filter((planet) => (planet.name.toLowerCase() // referência: https://stackoverflow.com/questions/42035717/js-filter-object-array-for-partial-matches/42035745
          .includes(filter.filterByName.name.toLowerCase())));
        setFilteredData(filtered);
      }
    }
    nameFilter();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filter]);

  // function nameFilter(array) {
  //   const filtered = array.filter((planet) => (planet.name.toLowerCase() // referência: https://stackoverflow.com/questions/42035717/js-filter-object-array-for-partial-matches/42035745
  //     .includes(filter.filterByName.name.toLowerCase())));
  //   console.log(filtered);
  //   setData(filtered);
  // }

  function searchInput(name) {
    setFilter({
      ...filter, filterByName: { name },
    });
  }

  const values = {
    data,
    setData,
    filter,
    setFilter,
    search,
    setSearch,
    searchInput,
    filteredData,
  };

  return (
    <div>
      <main>
        <StarContext.Provider value={ values }>
          {children}
        </StarContext.Provider>
      </main>
    </div>
  );
}

StarProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
