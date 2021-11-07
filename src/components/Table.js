import React, { useContext } from 'react';
import StarwarsContext from '../context/StarwarsContext';

function Table() {
  const { data, filter, name } = useContext(StarwarsContext);

  return (
    <table>
      <thead>
        <tr>
          { data.length !== 0 && Object.keys(data[0])
            .map((star) => <th key={ star }>{ star }</th>)}
        </tr>
      </thead>
      <tbody>
        { filter.length !== 0 && filter
          .filter((planet) => planet.name.toLowerCase().includes(name.toLowerCase()))
          .map((star) => (
            <tr key={ star.name }>
              <td>{ star.name }</td>
              <td>{ star.rotation_period }</td>
              <td>{ star.orbital_period }</td>
              <td>{ star.diameter }</td>
              <td>{ star.climate }</td>
              <td>{ star.gravity }</td>
              <td>{ star.terrain }</td>
              <td>{ star.surface_water }</td>
              <td>{ star.population }</td>
              <td>{ star.films }</td>
              <td>{ star.created }</td>
              <td>{ star.edited }</td>
              <td>{ star.url }</td>
            </tr>)) }
      </tbody>
    </table>
  );
}

export default Table;
