import React, { useContext } from 'react';
import MyContext from '../context/MyContext';
import { tableHeaders } from '../services/data';

function Home() {
  const { planets } = useContext(MyContext);
  return (
    <>
      <header>
        <h1>Star WArs Planet Search</h1>
      </header>
      <main>
        <section>
          <input type="text" name="search" className="input-text" />
        </section>
        <section>
          <select>
            <option>population</option>
          </select>
          <select>
            <option>menor que</option>
          </select>
          <input type="text" name="" className="input-text" />
          <button type="button">Filtrar</button>
        </section>
        <table>
          <thead>
            <tr>
              {tableHeaders.map((header, idx) => <th key={ idx }>{header}</th>)}
            </tr>
          </thead>
          <tbody>
            {planets.map((planet, id) => (
              <tr key={ id }>
                <td>{ planet.name }</td>
                <td>{ planet.rotation_period }</td>
                <td>{ planet.orbital_period }</td>
                <td>{ planet.diameter }</td>
                <td>{ planet.climate }</td>
                <td>{ planet.gravity}</td>
                <td>{ planet.terrain }</td>
                <td>{ planet.surface_water }</td>
                <td>{ planet.population }</td>
                <td>
                  <ul>
                    { planet.films.map(
                      (film, idx) => <li key={ idx }>{ film }</li>,
                    )}
                  </ul>
                </td>
                <td>{ planet.created }</td>
                <td>{ planet.edited }</td>
                <td>{ planet.url }</td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </>
  );
}

export default Home;
