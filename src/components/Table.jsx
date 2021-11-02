import React, { useContext } from 'react';

import planetsContext from '../context/planetsContext';

const Table = () => {
  const { data, isLoading, filter } = useContext(planetsContext);

  const renderTableHeader = () => {
    const headers = Object.keys(data[0]);

    return (
      <thead>
        <tr>
          {
            headers.map((header) => {
              if (header !== 'residents') return <th key={ header }>{header}</th>;
              return null;
            })
          }
        </tr>
      </thead>
    );
  };

  const filterPlanetsByName = () => {
    const { filterByName: { name } } = filter;
    if (name) {
      return data.filter((planet) => planet.name.includes(name));
    }
    return data;
  };

  const filterPlanetsByValues = (planets) => {
    const { filterByNumericValues: valuesFilter } = filter;
    return planets.filter((planet) => (
      planet && valuesFilter.every(({ column, comparison, value }) => {
        switch (comparison) {
        case 'maior':
          return Number(planet[column]) > Number(value);
        case 'menor':
          return Number(planet[column]) < Number(value);
        default:
          return Number(planet[column]) === Number(value);
        }
      })
    ));
  };

  const renderTableBody = () => {
    const planetsByName = filterPlanetsByName();
    const planets = filterPlanetsByValues(planetsByName);

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
  };

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
