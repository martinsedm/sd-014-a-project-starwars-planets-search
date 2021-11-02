import React, { useContext } from 'react';
import PlanetsContext from '../contextAPI/PlanetsContext';

export default function PlanetsTable() {
  const { data, filters } = useContext(PlanetsContext);

  const specificFilter = (column, comparison, value) => {
    if (comparison === 'maior que') {
      return data.filter((planet) => (
        planet[column] > Number(value)
      ));
    }

    if (comparison === 'menor que') {
      return data.filter((planet) => (
        planet[column] < Number(value)
      ));
    }

    return data.filter((planet) => (
      planet[column] === value
    ));
  };

  const getFilteredPlanets = () => {
    const { filterByName, filterByNumericValues } = filters;
    const { column, comparison, value } = filterByNumericValues;
    if (Object.keys(filterByNumericValues).length) {
      return specificFilter(column, comparison, value);
    }
    return data.filter(({ name }) => (
      name.toLowerCase().includes(filterByName.name.toLowerCase())
    ));
  };

  const tblHeaders = () => {
    const headers = Object.keys(data[0]);
    return headers.filter((tblHead) => tblHead !== 'residents')
      .map((tblHead) => tblHead.replace('_', ' '))
      .map((tblHead) => (
        <th key={ tblHead }>
          { tblHead.toUpperCase() }
        </th>
      ));
  };

  const rows = () => {
    const planetRows = getFilteredPlanets();
    return planetRows.map((colunm, index) => (
      <tr key={ index }>
        <td data-testid="planet-name">{colunm.name}</td>
        <td>{colunm.rotation_period}</td>
        <td>{colunm.orbital_period}</td>
        <td>{colunm.diameter}</td>
        <td>{colunm.climate}</td>
        <td>{colunm.gravity}</td>
        <td>{colunm.terrain}</td>
        <td>{colunm.surface_water}</td>
        <td>{colunm.population}</td>
        <td>{colunm.films}</td>
        <td>{colunm.created}</td>
        <td>{colunm.edited}</td>
        <td>{colunm.url}</td>
      </tr>
    ));
  };

  return (
    <div className="main-table">
      <table>
        <thead>
          <tr>
            { tblHeaders() }
          </tr>
        </thead>
        <tbody>
          { rows() }
        </tbody>
      </table>
    </div>
  );
}
