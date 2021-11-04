import React, { useContext, useEffect, useState } from 'react';
import StarWarsContext from '../context/StarWarsContext';

const TABLEHEADERS = ['Name', 'Rotation Period',
  'Orbital Period', 'Diameter', 'Climate', 'Gravity',
  'Terrain', 'Surface Water', 'Population', 'Films', 'Created', 'Edited', 'URL'];

const TYPEFILTER = ['population', 'orbital_period', 'diameter',
  'rotation_period', 'surface_water'];

const COMPARE = ['maior que', 'menor que', 'igual a'];

export default function Table() {
  const { data, handleChangeColum, handleChangeComparison,
    handleChangeNumber, filters: { filterByNumericValues },
    filters: { filterByName: { name } } } = useContext(StarWarsContext);

  const [filterPlanetName, setFilterPlanetName] = useState([]);

  const filterPlanet = () => {
    const lowerName = name.toLowerCase();
    const filteredPlanet = data
      .filter((planet) => planet.name.toLowerCase().includes(lowerName));
    setFilterPlanetName(filteredPlanet);
  };

  useEffect(filterPlanet, [data, name]);

  const filterNumericValue = (coluna, compara, numero) => {
    switch (compara) {
    case 'maior que':
      return setFilterPlanetName(filterPlanetName
        .filter((planet) => Number(planet[coluna]) > Number(numero)));
    case 'menor que':
      return setFilterPlanetName(filterPlanetName
        .filter((planet) => Number(planet[coluna]) < Number(numero)));
    case 'igual a':
      return setFilterPlanetName(filterPlanetName
        .filter((planet) => Number(planet[coluna]) === Number(numero)));
    default:
      return setFilterPlanetName(filterPlanetName);
    }
  };

  return (
    <>
      <div>
        <select
          data-testid="column-filter"
          onChange={ handleChangeColum }
          value={ filterByNumericValues[0].colum }
        >
          {TYPEFILTER.map((types) => (
            <option key={ types }>{types}</option>
          ))}
        </select>
        <select
          data-testid="comparison-filter"
          onChange={ handleChangeComparison }
          value={ filterByNumericValues[0].compare }
        >
          {COMPARE.map((comparison) => (
            <option key={ comparison }>{comparison}</option>
          ))}
        </select>
        <input
          type="number"
          value={ filterByNumericValues[0].number }
          data-testid="value-filter"
          onChange={ handleChangeNumber }
        />
        <button
          type="button"
          data-testid="button-filter"
          value="Filtrar"
          onClick={ () => filterNumericValue(filterByNumericValues[0].colum,
            filterByNumericValues[0].compare, filterByNumericValues[0].number) }
        >
          Filtrar
        </button>
      </div>
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
    </>
  );
}
