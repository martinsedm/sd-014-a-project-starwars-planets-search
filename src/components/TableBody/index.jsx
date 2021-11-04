import React, { useContext } from 'react';
import GlobalContext from '../../context/context';

function TableBody() {
  const { data, isLoading, filters } = useContext(GlobalContext);

  const numericFilter = (planets, filterByNumeric, name) => {
    const { column, comparison, value } = filterByNumeric;
    if (comparison === 'maior que') {
      return planets.filter((planet) => Number(planet[column]) > Number(value));
    }
    if (comparison === 'menor que') {
      return planets.filter((planet) => Number(planet[column]) < Number(value));
    }
    if (comparison === 'igual a') {
      return planets.filter((planet) => Number(planet[column]) === Number(value));
    }
    return planets
      .filter((planet) => planet.name.includes(name));
  };

  const filtred = () => {
    const { filterByName: { name }, filterByNumericValues } = filters;
    return numericFilter(data.results, filterByNumericValues[0], name);
  };

  return (
    <tbody>
      {
        isLoading
          ? <p>Carregando</p>
          : filtred().map((planet) => (
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
                {planet.films.map((film) => (
                  <p key={ film }>{film}</p>
                ))}
              </td>
              <td>{planet.created}</td>
              <td>{planet.edited}</td>
              <td>{planet.url}</td>
            </tr>
          ))
      }
    </tbody>
  );
}

export default TableBody;
