import React, { useContext } from 'react';
import starWarsContext from '../contexAPI/StarWarsContext';

function Table() {
  const { planets } = useContext(starWarsContext);
  if (!planets.length) {
    return <p> ...LOADING </p>;
  }

  const titleInfo = Object.keys(planets[0]).filter((info) => info !== 'residents');
  const titles = [...titleInfo];
  return (
    <table>
      <thead>
        <tr>
          {/* com ajuda do Kristiano Kasper! */}
          {titles.map((title) => (<th key={ title }>{ title }</th>))}
        </tr>
      </thead>
      <tbody>
        {planets
          .map((planet, index) => (
            <tr key={ index }>
              {titles.map((title, i) => <td key={ i }>{planet[title]}</td>)}
            </tr>))}
      </tbody>
    </table>
  );
}

export default Table;
