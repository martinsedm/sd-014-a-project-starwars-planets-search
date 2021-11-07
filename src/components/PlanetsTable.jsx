import React, { useContext } from 'react';
import MyContext from '../context/MyContext';
import { tableHeaders } from '../services/data';

function PlantesTable() {
  const { planets, filter } = useContext(MyContext);
  const { filters } = filter;
  const { filterByName: { name } } = filters;

  // useEffect(() => {
  //   if (name) {
  //     const newPlanets = planets
  //       .filter((planet) => planet.name.includes(name));
  //     setPlanet(newPlanets);
  //   }
  // }, [planets, name, setPlanet]);

  return (
    <table>
      <thead>
        <tr>
          {tableHeaders.map((header) => <th key={ header }>{header}</th>)}
        </tr>
      </thead>
      <tbody>
        {!name
          ? planets.map((planet) => (
            <tr key={ planet }>
              {Object.values(planet).map((planetInfo) => (
                <td key={ planet }>{ planetInfo }</td>
              ))}
            </tr>
          ))
          : planets.filter((planet) => planet.name.includes(name))
            .map((planet) => (
              <tr key={ planet }>
                {Object.values(planet).map((planetInfo) => (
                  <td key={ planet }>{ planetInfo }</td>
                ))}
              </tr>
            ))}
      </tbody>
    </table>
  );
}

export default PlantesTable;
