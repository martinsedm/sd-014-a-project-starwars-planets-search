import React, { useContext, useEffect } from 'react';
import StarWarsContext from '../context/StarWarsContext';
import '../css/Table.css';
import Loading from './Loading';

const Table = () => {
  const { data, filter, planetsByFilter,
    setPlanetsByFilter, titles, setTitles, newData, isLoading,
  } = useContext(StarWarsContext);

  useEffect(() => setTitles(Object.keys({ ...data[0] })
    .filter((title) => title !== 'residents')), [data, planetsByFilter, setTitles]);

  const trTitles = () => titles
    .filter((title) => title !== 'residents')
    .map((title) => title.replace(/_/g, ' '))
    .map((title) => title[0].toUpperCase() + title.slice(1))
    // <Refência: https://stackoverflow.com/questions/1026069/how-do-i-make-the-first-letter-of-a-string-uppercase-in-javascript>
    .map((title, index) => <th className="th" key={ index }>{title}</th>);

  const fullPlanets = (listPlanets) => listPlanets.map((planet) => (
    <tr key={ planet.name }>
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
    if (newData) return fullPlanets(newData);
    return titles && fullPlanets(data);
  };

  useEffect(() => {
    setPlanetsByFilter(planetsByFilter);
  }, [planetsByFilter, setPlanetsByFilter]);

  return (

    <table className="table">
      <thead>
        <tr>
          { isLoading ? <Loading /> : trTitles() }
        </tr>
      </thead>
      <tbody>
        { renderPlanets() }
      </tbody>
    </table>
  );
};

export default Table;
