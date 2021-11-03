import React from 'react';
import { usePlanets } from '../context/SWProvider';

/**
 * Table component
 * @param {Object} props
 * @returns {React.Component}
 */
const Table = () => {
  const { planets } = usePlanets();

  if (!planets || planets.length === 0) {
    return <p>No planets found</p>;
  }

  const columns = Object.keys(planets[0]);
  const rows = planets.map((planet) => (columns.map((column) => (planet[column]))));

  return (
    <table>
      <thead>
        <tr>
          { columns.map((column, index) => (<th key={ index }>{ column }</th>)) }
        </tr>
      </thead>
      <tbody>
        { rows.map((row, index) => (
          <tr key={ index }>
            { row.map((cell, idx) => (<td key={ idx }>{ cell }</td>)) }
          </tr>
        )) }
      </tbody>
    </table>
  );
};

export default Table;
