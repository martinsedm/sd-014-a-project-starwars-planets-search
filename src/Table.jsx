import React, { useContext } from 'react';
import PlanetsContext from './context/PlanetsContext';
import './Table.css';

function Table() {
  const { data, filters } = useContext(PlanetsContext);

  const tableHeadMaker = () => (
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
      <th>URL</th>
    </tr>
  );

  const tableBodyMaker = () => {
    const { name } = filters.filterByName;
    const { filterByNumericValues } = filters;
    const filteredPlanets = data
      .filter((planet) => planet.name.toLowerCase().includes(name.toLowerCase()))
      .filter((planet) => {
        const isPlanetValid = filterByNumericValues.every((thisFilter) => {
          const { comparison, column, value } = thisFilter;
          // console.log(`column: ${column} | comparison: ${comparison} | value: ${value}`);
          // console.log(filterByNumericValues);
          switch (comparison) {
          case 'maior que':
            return parseInt(planet[column], 10) > parseInt(value, 10);
          case 'menor que':
            return parseInt(planet[column], 10) < parseInt(value, 10);
          case 'igual a':
            return parseInt(planet[column], 10) === parseInt(value, 10);
          case '':
            return true;
          default:
            break;
          }
          return false;
        });
        return isPlanetValid;
      });

    // data-testid={ `${planet.name}` }
    // I think I set this vvvvv data-testid on the row and not the planet.name cell - check later
    const planetData = filteredPlanets.map((planet) => (
      <tr key={ planet.name }>
        { Object.values(planet)
          .map((info, index) => {
            if (index === 0) {
              return (
                <td key={ `${planet.name}-${info}` } data-testid="planet-name">
                  {info}
                </td>
              );
            }
            return <td key={ `${planet.name}-${info}` }>{info}</td>;
          }) }
      </tr>

    ));
    return planetData;
  };

  return (
    <table>
      <thead>
        {tableHeadMaker()}
      </thead>
      <tbody>
        {tableBodyMaker()}
      </tbody>
    </table>
  );
}

export default Table;
