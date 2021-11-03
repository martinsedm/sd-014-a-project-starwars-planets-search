import React, { useContext, useEffect, useState } from 'react';
import StarWarsContext from '../context/StarWarsContext';
import '../css/Table.css';

const Table = () => {
  const { data } = useContext(StarWarsContext);
  const [titles, setTitles] = useState();

  useEffect(() => setTitles(Object.keys({ ...data[0] })
    .filter((title) => title !== 'residents')), [data]);

  const trTitles = () => titles
    .filter((title) => title !== 'residents')
    .map((title) => title.replace(/_/g, ' '))
    .map((title) => title[0].toUpperCase() + title.slice(1))
    // <Refência: https://stackoverflow.com/questions/1026069/how-do-i-make-the-first-letter-of-a-string-uppercase-in-javascript>
    .map((title) => <th className="th" key={ title }>{title}</th>);

  const tdPlanets = () => data
    .filter((planet) => planet !== 'residents')
    .map((planet) => (
      <tr key={ planet }>
        { titles.map((title) => <td className="td" key={ title }>{planet[title]}</td>)}
      </tr>
    ));

  return (

    <table className="table">
      <thead>
        <tr>
          { titles && (trTitles()) }
        </tr>
      </thead>
      <tbody>
        { titles && (tdPlanets()) }
      </tbody>
    </table>
  );
};

export default Table;
