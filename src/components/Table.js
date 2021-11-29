import React, { useContext } from 'react';
import starWarsContext from '../contexAPI/StarWarsContext';

function Table() {
  const { planets, filters } = useContext(starWarsContext);
  const { order } = filters;
  const { sort, column } = order;
  if (!planets.length) {
    return <p> ...LOADING </p>;
  }

  const titles = Object.keys(planets[0]).filter((info) => info !== 'residents');

  const NEGATIVE_NUMBER = -1;
  // Lógica feita junto com Julio Cesar e Jonathan Ferreira
  const stringSort = (a, b) => {
    switch (sort) {
    case 'ASC':
      if (a[column] < b[column]) {
        return NEGATIVE_NUMBER;
      } return false;

    case 'DESC':
      if (a[column] > b[column]) {
        return NEGATIVE_NUMBER;
      } return false;
    default:
      return null;
    }
  };

  const numberSort = (a, b) => {
    switch (sort) {
    case 'ASC':
      return Number(a[column]) - Number(b[column]);
    case 'DESC':
      return Number(b[column]) - Number(a[column]);
    default:
      return null;
    }
  };

  const numberColumn = ['rotation_period', 'orbital_period', 'diameter',
    'gravity', 'surface_water', 'population'];

  return (
    <table>
      <thead>
        <tr>
          {/* com ajuda do Kristiano Kasper! */}
          {titles.map((title) => (<th key={ title }>{ title }</th>))}
        </tr>
      </thead>
      <tbody>
        {planets
          .sort(numberColumn.includes(column) ? numberSort : stringSort)
          .map((planet, index) => (
            <tr key={ index }>
              {titles
                .map((title, i) => (
                  <td
                    key={ i }
                    data-testid={ title === 'name' ? 'planet-name' : undefined }
                  >
                    {planet[title]}
                  </td>
                ))}
            </tr>))}
      </tbody>
    </table>
  );
}

export default Table;
