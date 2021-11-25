import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';
import { TABLEHEADERS } from '../data/data';
import Filters from './Filters';
import FilterUpDown from './FilterUpDown';

export default function Table() {
  const { filterPlanetName } = useContext(StarWarsContext);

  return (
    <>
      <Filters />
      <FilterUpDown />
      <div>
        <table>
          <thead>
            <tr>
              {TABLEHEADERS.map((head) => (
                <th key={ head }>{ head }</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filterPlanetName.map((planet) => (
              <tr key={ planet.name }>
                <td data-testid="planet-name">{planet.name}</td>
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
      </div>
    </>
  );
}
