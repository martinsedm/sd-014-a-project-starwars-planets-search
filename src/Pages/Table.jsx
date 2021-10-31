import React, { useContext } from 'react';
import TableContext from '../context/TableContext';

function Table() {
  const { response: { data }, filterText } = useContext(TableContext);

  const genertateTd = () => data.filter((planet) => planet.name.includes(filterText))
    .map((planets, index) => (
      <tr key={ index }>
        <td>{ planets.name }</td>
        <td>{ planets.rotation_period }</td>
        <td>{ planets.orbital_period }</td>
        <td>{ planets.diameter }</td>
        <td>{ planets.climate }</td>
        <td>{ planets.gravity }</td>
        <td>{ planets.terrain }</td>
        <td>{ planets.surface_water }</td>
        <td>{ planets.population }</td>
        <td>{ planets.films }</td>
        <td>{ planets.created }</td>
        <td>{ planets.edited }</td>
        <td>{ planets.url }</td>
      </tr>
    ));

  const tableHeader = () => (
    <thead>
      <tr>
        <th> name </th>
        <th> rotation period </th>
        <th> orbital period </th>
        <th> diameter </th>
        <th> climate </th>
        <th> gravity </th>
        <th> terrain </th>
        <th> surface water </th>
        <th> population </th>
        <th> films </th>
        <th> created </th>
        <th> edited </th>
        <th> url </th>
      </tr>
    </thead>
  );

  return (
    <table>
      {tableHeader()}
      <tbody>
        {genertateTd()}
      </tbody>
    </table>
  );
}

export default Table;
