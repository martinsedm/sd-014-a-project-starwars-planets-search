import React, { useContext } from 'react';
import Lottie from 'react-lottie';
import animationData from '../Lottie/baby-yoda.json';
import { Search, FormFilter, FormSort, Filter, Table } from '../components';
import StarWarsContext from '../Context/StarWarsContext';

function Home() {
  const { filters } = useContext(StarWarsContext);
  const { filterByNumericValues } = filters;
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };
  return (
    <div>
      <Lottie
        options={ defaultOptions }
        height={ 150 }
        width={ 150 }
      />
      <header className="d-flex justify-content-center align-items-center">
        <h1>Star Wars Planets</h1>
        <Search />
      </header>
      <main className="d-flex flex-column align-items-center gap-4">
        <FormFilter />
        <FormSort />
        {filterByNumericValues.map(({ column, comparison, value }) => (<Filter
          key={ column }
          column={ column }
          comparison={ comparison }
          value={ value }
        />)) }
        <Table />
      </main>
    </div>
  );
}

export default Home;
