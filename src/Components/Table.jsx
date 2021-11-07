import React, { useContext, useEffect } from 'react';
import APIContext from '../Context/APIContext';

function Table() {
  const { setData,
    setLoad, setheaders, isLoad, headers, planetasFiltrados } = useContext(APIContext);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
      const result = await response.json();
      setheaders(Object.keys(result.results[0]).filter((cur) => cur !== 'url'));
      setData(result.results);
      setLoad(false);
    }
    fetchData();
  }, [setData, setLoad, setheaders]);

  return (
    <table>
      <tr>
        {!isLoad && headers.map((cur, i) => <th key={ `th-${i}` }>{cur}</th>)}
      </tr>
      {!isLoad && planetasFiltrados().map((cur, i) => (
        <tr key={ `${cur.name}-${i}` }>
          <td>{cur.name}</td>
          <td>{cur.rotation_period}</td>
          <td>{cur.orbital_period}</td>
          <td>{cur.diameter}</td>
          <td>{cur.climate}</td>
          <td>{cur.gravity}</td>
          <td>{cur.terrain}</td>
          <td>{cur.surface_water}</td>
          <td>{cur.population}</td>
          <td>{cur.residents}</td>
          <td>{cur.films}</td>
          <td>{cur.created}</td>
          <td>{cur.edited}</td>
        </tr>
      ))}
    </table>
  );
}
Table.contextType = APIContext;
export default Table;
