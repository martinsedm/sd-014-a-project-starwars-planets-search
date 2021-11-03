import React, { useContext } from 'react';
import myContext from '../MyContext/MyContext';
import '../styles/table.css';
import Loading from './Loading';

function Table() {
  const { planets, loading } = useContext(myContext);

  return (
    loading ? <Loading /> : (
      <table className="table-planets">
        <thead>
          <tr>
            { Object.keys(planets[0]).map((title, index) => {
              if (title === 'residents') { return null; }
              return (
                <th key={ index }>
                  {title}
                </th>
              );
            }) }
          </tr>
        </thead>

        <tbody>
          { planets.map((planeta, index) => (
            <tr key={ index }>
              <td>{ planeta.name }</td>
              <td>{ planeta.rotation_period }</td>
              <td>{ planeta.orbital_period }</td>
              <td>{ planeta.diameter }</td>
              <td>{ planeta.climate }</td>
              <td>{ planeta.gravity }</td>
              <td>{ planeta.terrain }</td>
              <td>{ planeta.surface_water }</td>
              <td>{ planeta.population }</td>
              <td>{ planeta.films }</td>
              <td>{ planeta.created }</td>
              <td>{ planeta.edited }</td>
              <td>{ planeta.url }</td>
            </tr>
          )) }
        </tbody>
      </table>
    )
  );
}

export default Table;
