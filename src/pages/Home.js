import React, { useEffect, useContext } from 'react';
import getApiStarWars from '../services/APIStarwars';
import '../App.css';
import FilterByName from '../components/FilterByName';
import filterContext from '../context/filterContext';
import FilterByNum from '../components/FIlterByNum';

function Home() {
  const { setData, setDataFilt, dataFilt } = useContext(filterContext);

  const indexResidents = 9;

  useEffect(() => {
    getApiStarWars('https://swapi-trybe.herokuapp.com/api/planets/')
      .then((result) => {
        setData(result);
        setDataFilt(result);
      });
  }, [setData, setDataFilt]);
  return (
    <div>
      <h1>Projeto Star Wars - Trybe</h1>
      <FilterByName />
      <br />
      <FilterByNum />
      <table>
        <thead>
          <tr>
            { dataFilt.length > 0
          && Object.keys(dataFilt[0]).map((item) => (
            item !== 'residents'
            && (
              <th key={ item }>
                {item.split('_').join(' ')}
              </th>
            )
          ))}
          </tr>
        </thead>
        <tbody>
          {dataFilt.length > 0
        && dataFilt.map((planet) => (
          <tr key={ planet.name }>
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
