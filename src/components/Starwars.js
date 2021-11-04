import React, { useState, useContext } from 'react';
import StarwarsContext from '../context/StarwarsContext';
import '../Starwars.css';

function Starwars() {
  const [input, setInput] = useState('');
  const { starwars } = useContext(StarwarsContext);

  const handleChange = ({ target }) => {
    setInput(target.value);
  };

  return (
    <div>
      <header>
        <h1>Star Wars</h1>
      </header>
      <label htmlFor="input">
        <input
          type="text"
          id="input"
          value={ input }
          onChange={ handleChange }
        />
      </label>
      <table>
        <thead>
          <tr>
            { starwars.length !== 0 && Object.keys(starwars[0])
              .map((star) => <th key={ star }>{ star }</th>)}
          </tr>
        </thead>
        <tbody>
          { starwars.length !== 0 && starwars
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
              </tr>))}
        </tbody>
      </table>
    </div>
  );
}

export default Starwars;
