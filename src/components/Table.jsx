import React, { useContext, useEffect } from 'react';

import PlanetsContext from '../context/PlanetsContext';
// import fetchPlanetApi from '../services/fetchPlanetApi';
import useApi from '../hooks/useApi';

import Loading from './Loading';

export default function Table() {
  const { isLoading, data } = useContext(PlanetsContext);

  const tableRows = [
    'Name',
    'Rotation Period',
    'Orbital Period',
    'Diameter',
    'Climate',
    'Gravity',
    'Terrain',
    'Surface Water',
    'Population',
    'Films',
    'Created',
    'Edited',
    'URL',
  ];

  return isLoading ? <Loading /> : (
    <table>
      <thead>
        <tr>
          { tableRows.map((row, i) => (
            <th
              key={ i }
            >
              { row }
            </th>
          )) }
        </tr>
      </thead>
      <tbody>
        { data.map((r, i) => (
          <tr key={ i }>
            <td>{ r.name }</td>
            <td>{ r.rotation_period }</td>
            <td>{ r.orbital_period }</td>
            <td>{ r.diameter }</td>
            <td>{ r.climate }</td>
            <td>{ r.gravity }</td>
            <td>{ r.terrain }</td>
            <td>{ r.surface_water }</td>
            <td>{ r.population }</td>
            <td>{ r.films }</td>
            <td>{ r.created }</td>
            <td>{ r.edited }</td>
            <td>{ r.url }</td>
          </tr>
        )) }
      </tbody>
    </table>
  );
}

// https://www.w3schools.com/html/html_tables.asp
