import React, { useContext } from 'react';
import starWarsContext from '../contexAPI/StarWarsContext';

function Table() {
  const { planets } = useContext(starWarsContext);
  if (planets.length === 0) {
    return <p> ...LOADING </p>;
  }
  return (
    <table>
      <thead>
        <tr>
          {/* com ajuda do Kristiano! */}
          {Object.keys(planets[0]).map((title) => (
            title !== 'residents' ? <th key={ title }>{title}</th> : null))}
        </tr>
      </thead>
      <tbody>
        {planets.map((planet, index) => (
          <tr key={ index }>
            {Object
              .keys(planets[0]).map((title, i) => <td key={ i }>{planet[title]}</td>)}
          </tr>))}
      </tbody>
    </table>
  );
}

export default Table;
