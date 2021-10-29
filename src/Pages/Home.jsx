import React, { useContext } from 'react';
import Search from '../components/Search';
import Table from '../components/Table';
import FormFilter from '../components/FormFilter';
import Filter from '../components/Filter';
import StarWarsContext from '../Context/StarWarsContext';
import FormSort from '../components/FormSort';

function Home() {
  const { filters } = useContext(StarWarsContext);
  const { filterByNumericValues } = filters;
  return (
    <div>
      <h1>Star Wars Planets</h1>
      <Search />
      <FormFilter />
      <FormSort />
      {filterByNumericValues.map(({ column, comparison, value }) => (<Filter
        key={ column }
        column={ column }
        comparison={ comparison }
        value={ value }
      />)) }
      <Table />
    </div>
  );
}

export default Home;
