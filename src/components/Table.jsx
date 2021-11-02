import React, { useContext, useEffect, useState } from 'react';
import SWContext from '../context/SWContext';

function Table() {
  const { data } = useContext(SWContext);
  const [trTable, settrTable] = useState([]);
  const [infoIsLoaded, setInfoIsLoaded] = useState(false);

  useEffect(() => {
    if (data) {
      settrTable(Object.keys(data[0]).map((i) => (
        (i === 'rotation_period' && 'Rotation Period')
          || (i === 'orbital_period' && 'Orbital Period')
          || (i === 'surface_water' && 'Surface Water')
          || (i === 'url' && 'URL')
          || (i.replace(i[0], i[0].toLocaleUpperCase()))
      )));
      setInfoIsLoaded(true);
    }
  }, [data]);

  return (
    <main>
      {infoIsLoaded && (
        <table>
          <thead>
            <tr>
              {trTable.map((item) => <th key={ item }>{item}</th>)}
            </tr>
          </thead>
          <tbody>
            {data.map((planet) => (
              <tr key={ planet.orbital_period }>
                {Object.values(planet).map((value) => <td key={ value }>{value}</td>)}
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </main>
  );
}

export default Table;
