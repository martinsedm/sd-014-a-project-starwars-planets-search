import React, { useContext } from 'react';
import PlanetsContext from '../contextAPI/PlanetsContext';
import columnName from '../random/columnName';
import breakParagraphs from '../random/breakParagraphs';

export default function PlanetsTable() {
  const { data, filters, currentFilters } = useContext(PlanetsContext);

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

  const sortResults = (results, type, columnHead) => {
    switch (type) {
    case 'ASC':
      return results.sort((a, b) => (
        a[columnHead].localeCompare(b[columnHead], undefined, { numeric: true })));
    case 'DESC':
      return results.sort((a, b) => (
        b[columnHead].localeCompare(a[columnHead], undefined, { numeric: true })));
    default:
      break;
    }
  };

  const getFilteredPlanets = () => {
    const { filterByName, filterByNumericValues, order } = filters;
    const { column, comparison, value } = currentFilters;
    let filterName;

    if (Object.keys(filterByNumericValues).length) {
      filterName = specificFilter(column, comparison, value);
    } else {
      filterName = data.filter(({ name }) => (
        name.toLowerCase().includes(filterByName.name.toLowerCase())
      ));
    }

    return sortResults(filterName, order.sort, order.column);
  };

  const tblHeaders = () => {
    const headers = Object.keys(data[0]);
    return headers.filter((tblHead) => tblHead !== 'residents')
      .map((tblHead) => columnName(tblHead))
      .map((tblHead) => (
        <th key={ tblHead }>
          { tblHead }
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
        <td>{breakParagraphs(colunm.films)}</td>
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
