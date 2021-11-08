import React, { useState, useEffect } from 'react';

// import PlanetsContext from '../context/PlanetsContext';

import Loading from './Loading';

export default function Table() {
  // A função está aqui pq não estava passando no teste do lado de fora
  function useApi() {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const fetchData = async () => {
      setIsLoading(true);
      const fetchApi = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
      const response = await fetchApi.json();
      const apiResults = response.results;
      setData(apiResults);
      setIsLoading(false);
    };

    useEffect(() => {
      fetchData();
    }, []);

    return { data, isLoading };
  }

  const { isLoading, data } = useApi();

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

  const renderTableRows = () => (
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
  );

  const renderTable = () => (
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
  );

  return isLoading === true && !undefined ? <Loading /> : (
    <table>
      { renderTableRows() }
      { renderTable() }
    </table>
  );
}

// https://www.w3schools.com/html/html_tables.asp
