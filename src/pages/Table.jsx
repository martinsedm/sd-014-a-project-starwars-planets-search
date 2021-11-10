import React, { useContext } from 'react';
import StarwarsContext from '../context/StarwarsContext';

function Table() {
  const { data } = useContext(StarwarsContext);
  if (!data || data.length === 0) {
    return <p>...Loading </p>;
  }
  return (
    <table>
      <thead>
        <tr>
          {Object.keys(data[0]).map((infos) => (
            <th key={ infos }>
              {infos}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((info) => (
          <tr key={ info.diameter }>
            <td>
              {info.name}
            </td>
            <td>
              {info.rotation_period}
            </td>
            <td>
              {info.orbital_period}
            </td>
            <td>
              {info.diameter}
            </td>
            <td>
              {info.climate}
            </td>
            <td>
              {info.gravity}
            </td>
            <td>
              {info.terrain}
            </td>
            <td>
              {info.surface_water}
            </td>
            <td>
              {info.population}
            </td>
            <td>
              {info.films}
            </td>
            <td>
              {info.created}
            </td>
            <td>
              {info.edited}
            </td>
            <td>
              {info.url}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
