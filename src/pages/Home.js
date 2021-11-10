import React, { useContext } from 'react';

import PlanetContext from '../context/PlanetContext';
import Loading from '../components/Loading';

import FilterAPI from '../hooks/FilterAPI';
import Table from '../components/Table';
import SearchBar from '../components/SearchBar';
import DropDownColumn from '../components/DropDownColumn';
import DropDownComparison from '../components/DropDownComparison';
import NumberBox from '../components/NumberBox';

function Home() {
  const { loading } = useContext(PlanetContext);

  // const btnAction = (event) => {
  //   event.preventDefault();
  //   FilterAPI();
  //   console.log('click');
  // };

  return (
    <div>
      <header>
        <h1>Projeto Star Wars - Trybe</h1>
        <SearchBar />
      </header>
      <div>
        <DropDownColumn />
        <DropDownComparison />
        <NumberBox />
        <button type="submit" data-testid="button-filter" onClick={ FilterAPI }>O</button>
      </div>
      { loading ? <Loading /> : <Table /> }
    </div>
  );
}

export default Home;
