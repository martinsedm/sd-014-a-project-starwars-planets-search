import React, { useContext } from 'react';
import SWContext from '../context/SWContext';
import FilterForm from './FilterForm';

function Table() {
  const { info: { arrayFiltered, infoIsLoaded, tHead },
    filters: { filterByNumericValues }, removeFilter } = useContext(SWContext);

  return (
    <main>
      {infoIsLoaded && (
        <div>
          <FilterForm />
          {filterByNumericValues.map((filter) => (
            <div key={ filter.column } data-testid="filter">
              <p>{`${filter.column} ${filter.comparison} ${filter.value}`}</p>
              <button
                value={ filter.column }
                type="button"
                onClick={ ({ target }) => removeFilter(target.value) }
              >
                X
              </button>
            </div>
          ))}
          <table>
            <thead>
              <tr>
                {tHead.map((item) => <th key={ item }>{item}</th>)}
              </tr>
            </thead>
            <tbody>
              {arrayFiltered.map((planet) => (
                <tr key={ planet.orbital_period }>
                  {Object.values(planet).map((value) => <td key={ value }>{value}</td>)}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </main>
  );
}

export default Table;
