import React, { useContext } from 'react';
import PlanetContext from '../context/PlanetsContext';
import TableHeader from './TableHeader';

function Table() {
  const { data, filterMethod, filters } = useContext(PlanetContext);
  const NAME = 'name';
  const Numeric = 'numeric';

  let planetsToRender = [];

  function getName() {
    const { filterByName: { name } } = filters;
    return name;
  }

  switch (filterMethod) {
  case NAME:
    planetsToRender = data.filter(
      (planet) => (planet.name.toLowerCase().includes(getName().toLowerCase())),
    );
    break;
  case Numeric:
    planetsToRender = data.filter(
      (planet) => {
        const { filterByNumericValues } = filters;
        const lastFilterIndex = filterByNumericValues.length - 1;
        const { column, comparison, value } = filterByNumericValues[lastFilterIndex];
        if (comparison === 'maior que') {
          return parseInt(planet[column], 10) > parseInt(value, 10);
        } if (comparison === 'menor que') {
          return parseInt(planet[column], 10) < parseInt(value, 10);
        }
        return parseInt(planet[column], 10) === parseInt(value, 10);
      },
    );
    break;
  default:
    planetsToRender = data;
    break;
  }
  return (
    <table>
      <TableHeader />
      {
        planetsToRender.map((planetInfo, id) => (
          <tread
            key={ id }
          >
            <tr>
              <td>{ planetInfo.climate }</td>
              <td>{ planetInfo.created }</td>
              <td>{ planetInfo.diameter }</td>
              <td>{ planetInfo.edited }</td>
              <td>{ planetInfo.films }</td>
              <td>{ planetInfo.gravity }</td>
              <td>{ planetInfo.name }</td>
              <td>{ planetInfo.orbital_period }</td>
              <td>{ planetInfo.population }</td>
              <td>{ planetInfo.rotation_period }</td>
              <td>{ planetInfo.surface_water }</td>
              <td>{ planetInfo.terrain }</td>
              <td>{ planetInfo.url }</td>
            </tr>
          </tread>
        ))
      }
    </table>
  );
}

export default Table;
