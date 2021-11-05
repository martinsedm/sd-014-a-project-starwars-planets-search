import React, { useEffect, useContext } from 'react';
import getApiStarWars from '../services/APIStarwars';
import '../App.css';
import FilterByName from '../components/FilterByName';
import filterContext from '../context/filterContext';
import FilterByNum from '../components/FIlterByNum';
import Table from '../components/Table';
import LineFilter from '../components/LineFilter';
import SortContext from '../components/SortContent';
import './home.css';

function Home() {
  const { setData, setDataFilt } = useContext(filterContext);

  useEffect(() => {
    getApiStarWars('https://swapi-trybe.herokuapp.com/api/planets/')
      .then((result) => {
        setData(result);
        setDataFilt(result);
      });
  }, [setData, setDataFilt]);
  return (
    <div>
      <h1>Projeto Star Wars - Trybe</h1>
      <FilterByName />
      <br />
      <div className="filter-num">
        <FilterByNum />
        <SortContext />
      </div>
      <br />
      <LineFilter />
      <Table />
    </div>
  );
}

export default Home;
