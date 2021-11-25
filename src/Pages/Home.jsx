import React, { useContext } from 'react';
import Table from '../components/Table';
import StarWarsContext from '../context/StarWarsContext';

function Home() {
  const { filter, setFilter } = useContext(StarWarsContext);
  // console.log(setFilter, filter);

  function filterByName({ target }) {
    setFilter({
      ...filter,
      filters: {
        filterByName: {
          name: target.value,
        },
      },
    });
    console.log(filter);
    return true;
  }
  return (
    <div>
      <h1>Star Wars</h1>
      <label
        htmlFor="text"
      >
        Filter Name
        <input
          type="text"
          data-testid="name-filter"
          onChange={ filterByName }
        />
      </label>
      <Table />
    </div>
  );
}

export default Home;
