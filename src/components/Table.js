import React, { useContext, useEffect, useState } from 'react';
import StarWarsContext from '../context/StarWarsContext';

export default function Table() {
  const { data, filters: { filterByName: { name } } } = useContext(StarWarsContext);
  const [filterPlanetName, setFilterPlanetName] = useState([]);

  const tableHeaders = ['Name', 'Rotation Period',
    'Orbital Period', 'Diameter', 'Climate', 'Gravity',
    'Terrain', 'Surface Water', 'Population', 'Films', 'Created', 'Edited', 'URL'];

  const filterPlanet = () => {
    const lowerName = name.toLowerCase();
    const filteredPlanet = data
      .filter((planet) => planet.name.toLowerCase().includes(lowerName));
    setFilterPlanetName(filteredPlanet);
  };

  useEffect(filterPlanet, [data, name]);

  return (
    <table>
      <thead>
        <tr>
          {tableHeaders.map((head) => (
            <th key={ head }>{ head }</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {filterPlanetName.map((planet) => (
          <tr key={ planet.name }>
            <td>{planet.name}</td>
            <td>{planet.rotation_period}</td>
            <td>{planet.orbital_period}</td>
            <td>{planet.diameter}</td>
            <td>{planet.climate}</td>
            <td>{planet.gravity}</td>
            <td>{planet.terrain}</td>
            <td>{planet.surface_water}</td>
            <td>{planet.population}</td>
            <td>
              <ul>
                {planet.films.map((movie) => (
                  <li key={ movie }>{movie}</li>
                ))}
              </ul>

            </td>
            <td>{planet.created}</td>
            <td>{planet.edited}</td>
            <td>{planet.url}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
