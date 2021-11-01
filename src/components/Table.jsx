import React, { useContext } from 'react';

import planetsContext from '../context/planetsContext';

const Table = () => {
  const { data, isLoading, filter } = useContext(planetsContext);

  const renderTableHeader = () => (
    <thead>
      <tr>
        <th>Name</th>
        <th>Rotation Period</th>
        <th>Orbital Period</th>
        <th>Diameter</th>
        <th>Climate</th>
        <th>Gravity</th>
        <th>Terrain</th>
        <th>Surface Water</th>
        <th>Population</th>
        <th>Films</th>
        <th>Created</th>
        <th>Edited</th>
        <th>URL</th>
      </tr>
    </thead>
  );

  const renderTableBody = () => {
    const { filterByName: { name } } = filter;
    const planets = name ? data.filter((planet) => planet.name.includes(name))
      : data;

    return (
      planets.map((planet) => (
        <tr key={ planet.name }>
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
      ))
    );
  }

  if (isLoading) return <p>Loading...</p>;

  return (
    <table>
      { renderTableHeader() }
      <tbody>
        { renderTableBody() }
      </tbody>
    </table>
  );
};

export default Table;
