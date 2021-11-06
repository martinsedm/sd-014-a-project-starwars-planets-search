import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';
import NotFound from './NotFound';

export default function Table() {
  const { data, renderPlanets } = useContext(PlanetsContext);

  const handleTitles = () => (Object.keys(data[0])
    .filter((key) => !key.includes('residents'))
    .map((title, index) => (
      <th key={ index }>
        { title.charAt(0).toUpperCase() + title.slice(1).replace('_', ' ') }
      </th>)));
    // ref https://www.codegrepper.com/code-examples/javascript/return+string.charAt%280%29.toUpperCase%28%29+%2B+string.slice%281%29%3B

  const handleTable = () => (renderPlanets.map((planet, index) => (
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
    </tr>)));

  return (
    (renderPlanets.length === 0
      ? <NotFound />
      : (
        <table>
          <thead>
            <tr>
              { handleTitles() }
            </tr>
          </thead>
          <tbody>
            { handleTable() }
          </tbody>
        </table>
      )
    ));
}
