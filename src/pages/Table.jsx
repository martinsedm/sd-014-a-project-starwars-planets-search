import React, { useContext } from 'react';
import TableContext from '../services/contextPages';

export default function Table() {
  const { data } = useContext(TableContext);
  return (
    <div>
      <table>
        <thead>
          <tr>
            {Object.keys(data[0]).map((head) => (
              head !== 'residents'
              && <th key={ head } style={ { paddingLeft: '7.5px' } }>{head}</th>))}

          </tr>
        </thead>
        <tbody>
          {data.map((values, index) => (
            <tr key={ index }>
              <td>{values.name}</td>
              <td>{values.rotation_period}</td>
              <td>{values.orbital_period}</td>
              <td>{values.diameter}</td>
              <td>{values.climate}</td>
              <td>{values.gravity}</td>
              <td>{values.terrain}</td>
              <td>{values.surface_water}</td>
              <td>{values.population}</td>
              {/* <td>{values.residents}</td> */}
              <td>{values.films}</td>
              <td>{values.created}</td>
              <td>{values.edited}</td>
              <td>{values.url}</td>
            </tr>))}
        </tbody>
      </table>
    </div>
  );
}
