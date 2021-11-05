import React, { useContext } from 'react';
import filterContext from '../context/filterContext';

function Table() {
  const { sortPlanets } = useContext(filterContext);

  const indexResidents = 9;
  return (
    <table>
      <thead>
        <tr>
          { sortPlanets.length > 0
          && Object.keys(sortPlanets[0]).map((item) => (
            item !== 'residents'
            && (
              <th key={ item }>
                {item.split('_').join(' ')}
              </th>
            )
          ))}
        </tr>
      </thead>
      <tbody>
        {sortPlanets.length > 0
        && sortPlanets.map((planet) => (
          <tr key={ planet.name }>
            {Object.values(planet).map((value, i) => (
              i !== indexResidents
              && (
                <td key={ i } data-testid={ i === 0 && 'planet-name' }>
                  {value}
                </td>
              )
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
