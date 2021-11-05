import React, { useContext } from 'react';
import starContext from '../context/starContext';
import SearchInputs from './SearchInputs';

export default function Table() {
  const { data, filters } = useContext(starContext);
  // const [dataListener, setDataListener] = useState();

  // useEffect(() => { console.log(data); }, [data]);

  const planetFilter = () => data.filter((el) => (
    el.name.toLowerCase().includes(filters.filterByName.name.toLowerCase())
  ));

  if (data.length > 0) {
    return (
      <div>
        <SearchInputs />
        <table>
          <thead>
            <tr>
              {Object.keys(data[0]).map((title, index) => (
                <th key={ index }>
                  {title}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {
              planetFilter().map((planet) => (
                <tr key={ planet.name }>
                  <td data-testid="planet-name">{planet.name}</td>
                  <td>{planet.rotation_period}</td>
                  <td>{planet.orbital_period}</td>
                  <td>{planet.diameter}</td>
                  <td>{planet.climate}</td>
                  <td>{planet.gravity}</td>
                  <td>{planet.terrain}</td>
                  <td>{planet.population}</td>
                  <td>{planet.surface_water}</td>
                  <td>
                    <ul>
                      {planet.films.map((film) => (
                        <li key={ film }>{film}</li>
                      ))}
                    </ul>
                  </td>
                  <td>{planet.gravity}</td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    );
  }
  return (
    <div>
      <h1>loading</h1>
    </div>
  );
}
