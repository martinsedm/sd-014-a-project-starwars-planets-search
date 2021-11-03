import React, { useEffect, useState } from 'react';
import getApiStarWars from './services/APIStarwars';
import './App.css';
import FilterByName from './components/FilterByName';

function App() {
  const [returnAPi, setReturnApi] = useState([]);
  const indexResidents = 9;

  useEffect(() => {
    getApiStarWars('https://swapi-trybe.herokuapp.com/api/planets/')
      .then((result) => setReturnApi(result));
  }, []);
  return (
    <div>
      <h1>Projeto Star Wars - Trybe</h1>
      <FilterByName />
      <table>
        <thead>
          <tr>
            { returnAPi.length > 0
          && Object.keys(returnAPi[0]).map((item, index) => (
            item !== 'residents'
            && (
              <th key={ index }>
                {item.split('_').join(' ')}
              </th>
            )
          ))}
          </tr>
        </thead>
        <tbody>
          {returnAPi.length > 0
        && returnAPi.map((planet, index) => (
          <tr key={ index }>
            {Object.values(planet).map((value, i) => (
              i !== indexResidents
              && (
                <td key={ i }>
                  {value}
                </td>
              )
            ))}
          </tr>
        ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
