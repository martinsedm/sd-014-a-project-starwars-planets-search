import React, { useContext, useEffect } from 'react';
import PlanetsContext from '../context/PlanetsContext';
import getPlanetsInfo from '../services/planetsApi';

function Table() {
  const { planetInfo, filters, setPlanetsInfo } = useContext(PlanetsContext);

  function filter() {
    if (filters.filterByName.name) {
      return planetInfo.filter(
        (planet) => (planet.name).toLowerCase().includes((filters.filterByName.name)),
      );
    }
    if (
      filters.filterByNumericValues[0].column
      && filters.filterByNumericValues[0].comparison === 'maior que') {
      console.log('oid');
      return planetInfo.filter(
        (planet) => Number(
          planet[filters.filterByNumericValues[0].column]
          ,
        ) > Number(filters.filterByNumericValues[0].value),
      );
    }
    if (
      filters.filterByNumericValues[0].column
      && filters.filterByNumericValues[0].comparison === 'menor que') {
      console.log('oid');
      return planetInfo.filter(
        (planet) => Number(
          planet[filters.filterByNumericValues[0].column]
          ,
        ) < Number(filters.filterByNumericValues[0].value),
      );
    }
    if (
      filters.filterByNumericValues[0].column
      && filters.filterByNumericValues[0].comparison === 'igual a') {
      console.log('oid');
      return planetInfo.filter(
        (planet) => Number(
          planet[filters.filterByNumericValues[0].column],
        ) === Number(filters.filterByNumericValues[0].value),
      );
    }
    return planetInfo;
  }

  useEffect(() => {
    async function fetchPlanetsInfo() {
      const planetsInfo = await getPlanetsInfo();
      setPlanetsInfo(planetsInfo);
    }
    fetchPlanetsInfo();
  }, [setPlanetsInfo]);

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
      {filter().map((info) => {
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
