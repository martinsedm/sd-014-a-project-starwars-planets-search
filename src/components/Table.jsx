import React, { useContext, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Loading from './Loading';

import AppContext from '../context/AppContext';

export default function Table() {
  const { data, getData, loading } = useContext(AppContext);

  useEffect(() => {
    getData();
  }, []);

  if (loading) return <Loading />;
  return (
    <table>
      <thead>
        <tr>
          { Object.keys(data[0]).map((category) => (
            <th key={ uuidv4() }>
              { category }
            </th>
          )) }
        </tr>
      </thead>
      <tbody className="mt-2">
        {data.map((planet) => {
          const planetInfo = Object.values(planet);
          return (
            <tr key={ uuidv4() }>
              { planetInfo.map((info) => (
                <td key={ uuidv4() }>
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
