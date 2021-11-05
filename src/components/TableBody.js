import React, { useContext } from 'react';
import MyContext from '../context';
import Planets from './Planets';

export default function TableBody() {
  const { state: { results }, filterContext:
    { filters:
      { filterByName: { name }, filterByNumericValues } } } = useContext(MyContext);

  const planets = () => {
    if (name) {
      return results.filter((planet) => planet.name.toLowerCase()
        .includes(name.toLowerCase()));
    }
    if (filterByNumericValues.length > 0) {
      return filterByNumericValues.reduce((accumulator, current) => {
        const { comparison, column, value } = current;
        if (comparison === 'maior que') {
          accumulator = results
            .filter((planet) => Number(planet[column]) > Number(value));
        }
        if (comparison === 'menor que') {
          accumulator = results
            .filter((planet) => Number(planet[column]) < Number(value));
        }
        if (comparison === 'igual a') {
          accumulator = results
            .filter((planet) => Number(planet[column]) === Number(value));
        }
        return accumulator;
      }, [results]);
    }
    return results;
  };

  return (
    <Planets planets={ planets() } />
  );
}

// switch (comparison) {
//   case 'maior que':
//     accumulator = results
//       .filter((planet) => Number(planet[column]) > Number(value));
//     break;
//   case 'menor que':
//     accumulator = results
//       .filter((planet) => Number(planet[column]) < Number(value));
//     break;
//   case 'igual a':
//     accumulator = results
//       .filter((planet) => Number(planet[column]) === Number(value));
//     break;
//   default:
//     break;
//   }
