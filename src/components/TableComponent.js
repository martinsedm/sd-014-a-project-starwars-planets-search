import React, { useContext } from 'react';
import StarsContext from '../context/myContext';

const headers = [
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

export default function TableComponent() {
  const { planetas, filters, numericFilter } = useContext(StarsContext);

  const getFilteredNumerically = (caracteristic, comparison, valor) => {
    if (comparison === 'maior que') {
      return planetas.filter((planeta) => (planeta[caracteristic] > Number(valor)));
    }

    if (comparison === 'menor que') {
      return planetas.filter((planeta) => (planeta[caracteristic] < Number(valor)));
    }

    if (comparison === 'igual a') {
      return planetas.filter((planeta) => (planeta[caracteristic] === valor));
    }
  };

  const getFilteredByOrder = (usedFilter, column, sort) => {
    switch (sort) {
    case 'ASC': return usedFilter.sort((a, b) => (
      // Referência de lógica: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/localeCompare
      a[column].localeCompare(b[column], 'en-u-kn-true')));
    case 'DESC': return usedFilter.sort((a, b) => (
      b[column].localeCompare(a[column], 'en-u-kn-true')));
    default: break;
    }
  };

  const getFilteredPlanets = () => {
    const { filterByName, filterByNumericValues, order } = filters;
    const { caracteristic, comparison, value } = numericFilter;
    const { column, sort } = order;
    let usedFilter;

    if (Object.keys(filterByNumericValues).length) {
      usedFilter = getFilteredNumerically(caracteristic, comparison, value);
    } else {
      usedFilter = planetas
        .filter(({ name }) => (
          name.toLowerCase().includes(filterByName.name.toLowerCase())
        ));
    }

    return getFilteredByOrder(usedFilter, column, sort);
  };

  const linhas = () => {
    const filteredPlanets = getFilteredPlanets();
    return filteredPlanets.map((planeta) => (
      <tr key={ planeta.name }>
        <td data-testid="planet-name">{planeta.name}</td>
        <td>{planeta.rotation_period}</td>
        <td>{planeta.orbital_period}</td>
        <td>{planeta.diameter}</td>
        <td>{planeta.climate}</td>
        <td>{planeta.gravity}</td>
        <td>{planeta.terrain}</td>
        <td>{planeta.surface_water}</td>
        <td>{planeta.population}</td>
        <td>{planeta.films}</td>
        <td>{planeta.created}</td>
        <td>{planeta.edited}</td>
        <td>{planeta.url}</td>
      </tr>
    ));
  };

  return (
    <section>
      <table
        className="table table-striped
        table-dark table-bordered table-hover table-sm"
      >
        <caption>List of planets</caption>
        <thead className="thead-light">
          <tr>
            {headers.map((h2) => (
              <th key={ h2 } className="bg-warning">
                {h2}
              </th>))}
          </tr>
        </thead>
        <tbody>
          {linhas()}
        </tbody>
      </table>
    </section>
  );
}
