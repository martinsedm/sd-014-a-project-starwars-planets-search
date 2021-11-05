import React, { useContext, useEffect } from 'react';
import PlanetsContext from '../context/PlanetsContext';

function Table() {
  const { planetInfo, filters, fetchPlanetsInfo } = useContext(PlanetsContext);

  function filterByName() {
    // Vi que estava fazendo o filter no local errado depois que vi o pr do Rodolfo Pinheiro
    if (filters.filterByName.name) {
      return planetInfo.filter(
        (planet) => (planet.name).toLowerCase().includes((filters.filterByName.name)),
      );
    }
    return planetInfo;
  }

  useEffect(() => {
    fetchPlanetsInfo();
  }, [fetchPlanetsInfo]);

  return (
    <table>
      <tr>
        <th>Name</th>
        <th>Rotation Period</th>
        <th>Orbital Period</th>
        <th>Diamete</th>
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
      {filterByName().map((info) => {
        const {
          name,
          rotation_period: rotationPeriod,
          orbital_period: orbitalPeriod,
          diameter,
          climate,
          gravity,
          terrain,
          surface_water: surfaceWater,
          population,
          films,
          created,
          edited,
          url,
        } = info;
        return (
          <tr key={ name }>
            <td>{name}</td>
            <td>{rotationPeriod}</td>
            <td>{ orbitalPeriod }</td>
            <td>{ diameter }</td>
            <td>{ climate }</td>
            <td>{gravity}</td>
            <td>{terrain}</td>
            <td>{surfaceWater}</td>
            <td>{population}</td>
            <td>{films}</td>
            <td>{created}</td>
            <td>{edited}</td>
            <td>{url}</td>
          </tr>
        );
      })}
    </table>
  );
}

export default Table;
