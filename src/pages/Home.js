import React, { useEffect, useContext } from 'react';
import getApiStarWars from '../services/APIStarwars';
import '../App.css';
import FilterByName from '../components/FilterByName';
import filterContext from '../context/filterContext';
import FilterByNum from '../components/FIlterByNum';

function Home() {
  const { data, setData } = useContext(filterContext);

  const indexResidents = 9;

  useEffect(() => {
    getApiStarWars('https://swapi-trybe.herokuapp.com/api/planets/')
      .then((result) => setData(result));
  }, [setData]);
  return (
    <div>
      <h1>Projeto Star Wars - Trybe</h1>
      <FilterByName />
      <br />
      <FilterByNum />
      <table>
        <thead>
          <tr>
            { data.length > 0
          && Object.keys(data[0]).map((item, index) => (
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
          {data.length > 0
        && data.map((planet, index) => (
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

export default Home;
