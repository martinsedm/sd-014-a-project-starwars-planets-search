import React, { useContext } from 'react';
import ContextApi from '../componentes/ContextApi';

function Table() {
  const { DataFiltered, filters } = useContext(ContextApi);
  const { filterByNumericValues } = filters;
  const filterNum = filterByNumericValues;

  return (
    <table>
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
          <th>Url</th>
        </tr>
      </thead>
      <tbody>
        {DataFiltered.filter((plt) => {
          if (!filterNum[0]) return plt;
          switch (filterNum[0].comparsion) {
          case 'maior que':
            return plt[filterNum[0].column] > Number(filterNum[0].value);
          case 'menor que':
            return plt[filterNum[0].column] < Number(filterNum[0].value);
          case 'igual a':
            return plt[filterNum[0].column] === filterNum[0].value;

          default:
            return plt;
          }
        }).map((info, key) => (
          <tr key={ key }>
            <td>{info.name}</td>
            <td>{info.rotation_period}</td>
            <td>{info.orbital_period}</td>
            <td>{info.diameter}</td>
            <td>{info.climate}</td>
            <td>{info.gravity}</td>
            <td>{info.terrain}</td>
            <td>{info.surface_water}</td>
            <td>{info.population}</td>
            <td>{info.films}</td>
            <td>{info.created}</td>
            <td>{info.edited}</td>
            <td>{info.url}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
