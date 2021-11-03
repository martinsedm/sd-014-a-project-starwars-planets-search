import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';
import Loading from './Loading';

export default function Table() {
  const { planets, isLoading, searchedPlanets } = useContext(PlanetsContext);

  const handleTitles = () => (Object.keys(planets[0])
    .filter((title) => title !== 'residents')
    .map((title, index) => (
      <th key={ index }>
        { title.charAt(0).toUpperCase() + title.slice(1).replace('_', ' ') }
      </th>)));
    // ref https://www.codegrepper.com/code-examples/javascript/return+string.charAt%280%29.toUpperCase%28%29+%2B+string.slice%281%29%3B

  return (
    isLoading ? <Loading /> : (
      <table>
        <thead>
          <tr>
            { handleTitles() }
          </tr>
        </thead>
        <tbody>
          { searchedPlanets.map((planet, index) => (
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
            </tr>)) }
        </tbody>
      </table>
    )
  );
}
