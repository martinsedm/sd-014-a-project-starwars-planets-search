import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';

function Table() {
  const { data,
    isLoading,
    displayFilteredPlanets,
    filters: { filterByNumericValues },
  } = useContext(PlanetsContext);

  const { column, comparison, value } = filterByNumericValues[0];

  const renderHeader = () => {
    const headerContent = Object.keys(data[0]);
    const contentFiltered = headerContent.filter((content) => (content !== 'residents'));
    return contentFiltered.map((title) => (<th key={ title }>{ title }</th>));
  };

  if (isLoading) return <p>Carregando...</p>;

  return (
    <table>
      <thead>
        <tr>
          { renderHeader() }
        </tr>
      </thead>
      <tbody>
        { displayFilteredPlanets.filter((planet) => {
          if (!value) return planet;
          if (comparison === 'maior que') return Number(planet[column]) > Number(value);
          if (comparison === 'menor que') return Number(planet[column]) < Number(value);
          if (comparison === 'igual a') return Number(planet[column]) === Number(value);
          return planet;
        })
          .map((planet, index) => (
            <tr key={ index }>
              <td>{ planet.name }</td>
              <td>{ planet.rotation_period }</td>
              <td>{ planet.orbital_period }</td>
              <td>{ planet.diameter }</td>
              <td>{ planet.climate }</td>
              <td>{ planet.gravity }</td>
              <td>{ planet.terrain }</td>
              <td>{ planet.surface_water }</td>
              <td>{ planet.population }</td>
              <td>{ planet.films }</td>
              <td>{ planet.created }</td>
              <td>{ planet.edited }</td>
              <td>{ planet.url }</td>
            </tr>
          ))}
      </tbody>
    </table>
  );
}

export default Table;
