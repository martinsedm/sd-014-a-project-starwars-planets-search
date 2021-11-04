import React, { useContext, useEffect, useState } from 'react';
import SWContext from '../context/SWContext';
import makeTheaderArray from '../helpers';
import FilterForm from './FilterForm';
import RemoveBtn from './RemoveBtn';

function Table() {
  const { data, arrayFiltered } = useContext(SWContext);

  const [tableInfo, setTableInfo] = useState({ tHead: [], infoIsLoaded: false });

  useEffect(() => {
    if (data.length !== 0) {
      setTableInfo({
        tHead: makeTheaderArray(data), infoIsLoaded: true,
      });
    }
  }, [data]);

  return (
    <main>
      {tableInfo.infoIsLoaded && (
        <div>
          <FilterForm />
          <RemoveBtn />
          <table>
            <thead>
              <tr>
                {tableInfo.tHead.map((item) => <th key={ item }>{item}</th>)}
              </tr>
            </thead>
            <tbody>
              {arrayFiltered.map((planet) => (
                <tr key={ planet.orbital_period }>
                  {Object.values(planet).map((value, index) => (
                    <td
                      data-testid={ index === 0 && 'planet-name' }
                      key={ value }
                    >
                      { value }
                    </td>
                  ))}
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
