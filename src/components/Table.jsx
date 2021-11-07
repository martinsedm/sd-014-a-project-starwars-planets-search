import React, { useContext, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

import AppContext from '../context/AppContext';

import Loading from './Loading';

export default function Table() {
  const {
    data,
    getData,
    filters,
    filteredData,
  } = useContext(AppContext);
  const { filterByName } = filters;

  useEffect(() => {
    getData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /* Lógica da pessoa colega Leonardo Bermejo */
  const dataArray = filteredData.length === 0 ? data : filteredData;
  const filteredByName = dataArray.filter((planet) => {
    if (filterByName !== '') {
      return planet.name.toLowerCase().includes(filterByName.name.toLowerCase());
    }
    return planet;
  });

  const headings = [
    'Name',
    'Rotation Period',
    'Orbital Period',
    'Diameter',
    'Climate',
    'Gravity',
    'Terrain',
    'Surface Water',
    'Population',
    'Films',
    'Created',
    'Edited',
    'URL',
  ];

  const { loading } = useContext(AppContext);
  if (loading) return <Loading />;
  return (
    <table>
      <thead>
        <tr>
          { headings.map((heading) => (
            <th key={ uuidv4() }>
              { heading }
            </th>
          )) }
        </tr>
      </thead>
      <tbody>
        {filteredByName.map((planet) => {
          const planetInfo = Object.values(planet);
          return (
            <tr key={ uuidv4() }>
              { planetInfo.map((info) => (
                <td
                  key={ uuidv4() }
                  className="m-3"
                >
                  {info}
                </td>
              )) }
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
