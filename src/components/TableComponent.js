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
  const { filters, planetas } = useContext(StarsContext);

  const getFilteredNumerically = (caracteristic, comparison, valor) => {
    console.log(comparison);
    if (comparison === 'maior que') {
      return planetas.filter((planeta) => planeta[caracteristic] > Number(valor));
    }
    if (comparison === 'menor que') {
      return planetas.filter((planeta) => planeta[caracteristic] < Number(valor));
    }
    return planetas.filter((planeta) => planeta[caracteristic] === Number(valor));
  };

  const getFilteredPlanets = () => {
    const { filterByName, filterByNumericValues } = filters;
    const { caracteristic, comparison, value } = filterByNumericValues;

    if (Object.keys(filterByNumericValues).length > 1) {
      return getFilteredNumerically(caracteristic, comparison, value);
    }
    return planetas.filter(({ name }) => (
      name.toLowerCase().includes(filterByName.name.toLowerCase())
    ));
  };

  const linhas = () => {
    const filteredPlanets = getFilteredPlanets();
    console.log(filteredPlanets);
    return filteredPlanets.map((planeta) => (
      <tr key={ planeta.name }>
        <td>{ planeta.name }</td>
        <td>{ planeta.rotation_period }</td>
        <td>{ planeta.orbital_period }</td>
        <td>{ planeta.diameter}</td>
        <td>{ planeta.climate}</td>
        <td>{ planeta.gravity}</td>
        <td>{ planeta.terrain}</td>
        <td>{ planeta.surface_water}</td>
        <td>{ planeta.population}</td>
        <td>{ planeta.films}</td>
        <td>{ planeta.created}</td>
        <td>{ planeta.edited}</td>
        <td>{ planeta.url}</td>
      </tr>
    ));
  };

  return (
    <table className="table table-striped table-dark table-bordered table-hover table-sm">
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
        { linhas() }
      </tbody>
    </table>
  );
}
