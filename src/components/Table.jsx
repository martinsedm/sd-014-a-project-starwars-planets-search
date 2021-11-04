import React, { useContext } from 'react';
import Context from '../context/Context';

function Table() {
  const { data: { results }, filter: { filters } } = useContext(Context);
  const { filterByName: { name } } = filters;

  if (results === undefined) return <h2>Loading....</h2>;

  return (
    <table>
      <thead>
        <tr>
          {Object.keys(results[0])
            .map((keys) => (<th key={ keys }>{keys.split('_').join('')}</th>))}
        </tr>
      </thead>
      <tbody>
        {name.length === 0
          ? results.map((planets) => (
            <tr key={ planets.name }>
              {Object.values(planets).map((value) => (
                planets.name === value
                  ? <td data-testid="planet-name" key={ value }>{value}</td>
                  : <td key={ value }>{value}</td>))}
            </tr>
          )) : results
            .filter((filter) => filter.name
              .toLowerCase()
              .includes(name
                .toLowerCase()))
            .map((planets) => (
              <tr key={ planets.name }>
                {Object.values(planets).map((value) => <td key={ value }>{value}</td>)}
              </tr>
            ))}
      </tbody>
    </table>
  );
}

export default Table;

// https://github.com/tryber/sd-014-a-project-starwars-planets-search/pull/92/commits/1650d10b929bbd174ea4c8d6b7766a1f01e361bc
