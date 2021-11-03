import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';
import PlanetsTableHeader from './PlanetsTableHeader';

function PlanetsTable() {
  const { planets } = useContext(StarWarsContext);
  return (
    <table>
      <PlanetsTableHeader />
      <tbody>
        {
          planets.map((planetInfo) => (
            <tr
              key={ planetInfo.url }
            >
              <td>{ planetInfo.name }</td>
              <td>{ planetInfo.rotation_period }</td>
              <td>{ planetInfo.orbital_period }</td>
              <td>{ planetInfo.diameter }</td>
              <td>{ planetInfo.climate }</td>
              <td>{ planetInfo.gravity }</td>
              <td>{ planetInfo.terrain }</td>
              <td>{ planetInfo.surface_water }</td>
              <td>{ planetInfo.population }</td>
              <td>{ planetInfo.residents }</td>
              <td>{ planetInfo.films }</td>
              <td>{ planetInfo.created }</td>
              <td>{ planetInfo.edited }</td>
              <td>{ planetInfo.url }</td>
            </tr>
          ))
        }
      </tbody>
    </table>
  );
}
// até aqui ta certo
export default PlanetsTable;
