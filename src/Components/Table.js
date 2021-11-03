import React, { useContext } from 'react';
import PlanetContext from '../context/PlanetsContext';
import TableHeader from './TableHeader';

function Table() {
  const { data, filterMethod, filters } = useContext(PlanetContext);
  const NAME = 'name';

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
  default:
    planetsToRender = data;
    break;
  }
  return (
    <table>
      <TableHeader />
      {
        planetsToRender.map((planetInfo, id) => (
          <tr
            key={ id }
          >
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
        ))
      }
    </table>
  );
}

export default Table;
