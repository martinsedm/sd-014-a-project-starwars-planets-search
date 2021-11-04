import React from 'react';

import usePlanets from '../hooks/usePlanets';
import { useFilters } from '../context/SWProvider';
import useFilter from '../hooks/useFilter';
import SearchBar from './SearchBar';

/**
 * Table component
 * @param {Object} props
 * @returns {React.Component}
 */
const Table = () => {
  const { planets } = usePlanets();
  const { filters } = useFilters();
  const { filteredPlanets } = useFilter(planets, filters);

  if (!planets || planets.length === 0) {
    return <p>No planets found</p>;
  }

  const columns = Object.keys(planets[0]);
  const rows = filteredPlanets.map(
    (planet) => (columns.map((column) => (planet[column]))),
  );

  return (
    <main>
      <SearchBar />
      <table>
        <thead>
          <tr>
            { columns.map((column, index) => (<th key={ index }>{ column }</th>)) }
          </tr>
        </thead>
        <tbody>
          { rows.map((row, index) => (
            <tr key={ index }>
              { row.map((cell, idx) => (
                <td
                  key={ idx }
                  data-testid={ columns[idx] === 'name' ? 'planet-name' : 'planet-info' }
                >
                  { cell }
                </td>
              )) }
            </tr>
          )) }
        </tbody>
      </table>
    </main>
  );
};

export default Table;
