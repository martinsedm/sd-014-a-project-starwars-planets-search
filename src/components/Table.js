import React, { useContext } from 'react';
import SWContext from '../context/SWContext';
import { ALL_CATEGORIES } from '../info';

function Table() {
  const { filteredData } = useContext(SWContext);
  return (
    <section>
      <table>
        <thead>
          <tr>
            { ALL_CATEGORIES.map((cat) => <th key={ `${cat}_th` }>{ cat }</th>) }
          </tr>
        </thead>
        <tbody>
          { filteredData.map((planet) => (
            <tr key={ planet.name }>
              { Object.values(planet).map((value) => <td key={ value }>{ value }</td>) }
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}

export default Table;
