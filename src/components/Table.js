// src: https://github.com/tryber/sd-14a-live-lectures/blob/lecture/17.2/trybe-questions/src/components/QuestionList.js
// src: https://www.w3schools.com/html/html_tables.asp

import React, { useContext } from 'react';

import PlanetsContext from '../context/PlanetsContext';

function Table() {
  const { data, isLoading } = useContext(PlanetsContext); // src: https://medium.com/@devjpnobrega/primeiros-passos-com-react-hooks-usecontext-66c69ded5411

  const infos = () => data.map((results) => (
    <tr key={ results.name }>
      <td>{results.name}</td>
      <td>{results.rotation_period}</td>
      <td>{results.orbital_period}</td>
      <td>{results.diameter}</td>
      <td>{results.climate}</td>
      <td>{results.gravity}</td>
      <td>{results.terrain}</td>
      <td>{results.surface_water}</td>
      <td>{results.population}</td>
      <td>{results.films}</td>
      <td>{results.created}</td>
      <td>{results.edited}</td>
      <td>{results.url}</td>
    </tr>));

  const header = () => (
    // src: https://www.w3schools.com/tags/tag_thead.asp
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

  return (
    isLoading ? <p>Carregando</p> : (
      <table>
        {header()}
        <tbody>
          {infos()}
        </tbody>
      </table>
    )
  );
}

export default Table;
