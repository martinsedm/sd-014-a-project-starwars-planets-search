import React, { useContext } from 'react';
import starWarsContext from '../contexAPI/StarWarsContext';

function Table() {
  const { data } = useContext(starWarsContext);
  if (data.length === 0) {
    return <p> ...LOADING </p>;
  }
  return (
    <table>
      <thead>
        <tr>
          {/* com ajuda do Kristiano! */}
          {Object.keys(data[0]).map((title) => (
            title !== 'residents' ? <th key={ title }>{title}</th> : null))}
        </tr>
      </thead>
      <tbody>
        {data.map((planet, index) => (
          <tr key={ index }>
            {Object.keys(data[0]).map((title, i) => <td key={ i }>{planet[title]}</td>)}
          </tr>))}
      </tbody>
    </table>
  );
}

export default Table;
