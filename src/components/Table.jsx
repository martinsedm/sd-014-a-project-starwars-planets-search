import React, { useEffect, useState } from 'react';

export default function Table() {
  const [planets, setPlanets] = useState([]);

  const fecthPlanets = async () => {
    const URL = 'https://swapi-trybe.herokuapp.com/api/planets/';
    const response = await fetch(URL);
    const json = await response.json();
    setPlanets(json.results);
  };

  useEffect(() => {
    fecthPlanets();
  }, []);

  if (planets.length === 0) return <span>Loading...</span>;

  return (
    <table>
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
      { planets.map((planet) => {
        // const URL_BASE = 'https://swapi-trybe.herokuapp.com/api/planets/';
        // const URLPlanet = planet.URl;
        // const id = URLPlanet.replace(URL_BASE, '');
        return (
          <tr key={ planet.URL }>
            <td>{planet.name}</td>
            <td>{planet.rotation_period}</td>
            <td>{planet.orbital_period}</td>
            <td>{planet.diameter}</td>
            <td>{planet.climate}</td>
            <td>{planet.gravity}</td>
            <td>{planet.terrain}</td>
            <td>{planet.surface_water}</td>
            <td>{planet.population}</td>
          </tr>
        );
      })}
    </table>
  );
}
