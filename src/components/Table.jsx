import React, { useContext } from 'react';
import SWContext from '../context/SWContext';
import FilterForm from './FilterForm';

function Table() {
  const { info: { arrayFiltered, infoIsLoaded, tHead } } = useContext(SWContext);

  return (
    <main>
      {infoIsLoaded && (
        <div>
          <FilterForm />
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
