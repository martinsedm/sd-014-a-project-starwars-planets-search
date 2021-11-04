import React, { useContext, useEffect, useState } from 'react';
import StarWarsContext from '../context/StarWarsContext';
import '../css/Table.css';

const Table = () => {
  const { data, filter, planetsByFilter,
    setPlanetsByFilter } = useContext(StarWarsContext);
  const [titles, setTitles] = useState();

  useEffect(() => setTitles(Object.keys({ ...data[0] })
    .filter((title) => title !== 'residents')), [data, planetsByFilter]);

  const trTitles = () => titles
    .filter((title) => title !== 'residents')
    .map((title) => title.replace(/_/g, ' '))
    .map((title) => title[0].toUpperCase() + title.slice(1))
    // <Refência: https://stackoverflow.com/questions/1026069/how-do-i-make-the-first-letter-of-a-string-uppercase-in-javascript>
    .map((title) => <th className="th" key={ title }>{title}</th>);

  const fullPlanets = (listPlanets) => listPlanets.map((planet) => (
    <tr key={ planet }>
      { titles.map((title) => <td className="td" key={ title }>{planet[title]}</td>)}
    </tr>
  ));

  const renderPlanets = () => {
    const { filterByName: { name } } = filter;
    if (name) {
      return (
        fullPlanets(planetsByFilter)
      );
    }
    return fullPlanets(data);
  };

  useEffect(() => {
    setPlanetsByFilter(planetsByFilter);
  }, [planetsByFilter, setPlanetsByFilter]);

  return (

    <table className="table">
      <thead>
        <tr>
          { console.log(planetsByFilter, 'planetsByFilter') }
          { titles && (trTitles()) }
        </tr>
      </thead>
      <tbody>
        { titles && (renderPlanets()) }
      </tbody>
    </table>
  );
};

export default Table;
