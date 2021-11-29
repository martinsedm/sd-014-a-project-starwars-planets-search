import React, { useContext, useEffect } from 'react';
import Context from '../contexts/Context';
import Button from './atomos/Button';

export default function NumberFilters() {
  const { filters, setFilters, planets, setFilterPlanets } = useContext(Context);
  // const { middleStage, setMidleStage } = useState(planets);
  const { filterByNumericValues } = filters;

  function handleClick({ target: { value } }) {
    const deletedFilter = filterByNumericValues
      .filter((eachFilter) => eachFilter.column !== value);
    setFilters({
      ...filters,
      filterByNumericValues: deletedFilter,
    });
  }

  useEffect((() => {
    function planetsFilter(column, comparison, value) {
      const resultArray = planets.filter((planet) => {
        if (comparison === 'maior que') {
          return Number(planet[column]) > Number(value);
        }
        if (comparison === 'menor que') {
          return Number(planet[column]) < Number(value);
        }
        if (comparison === 'igual a') {
          return Number(planet[column]) === Number(value);
        }
        return false;
      });
      return resultArray;
    }

    if (filterByNumericValues.length > 0) {
      let filteredPlanets;
      const filtered = filterByNumericValues
        .forEach(({ column, comparison, value }) => {
          filteredPlanets = planetsFilter(column, comparison, value);
        });
      console.log('2', filtered);
      // console.log('3', planetsFilter('population', 'maior que', '100000'));
      setFilterPlanets(filteredPlanets);
    }
  }), [filterByNumericValues, planets, setFilterPlanets]);

  if (filterByNumericValues.length > 0) {
    return (
      <div>
        {filterByNumericValues.map(({ column, comparison, value }) => (
          <div key={ column }>
            <span>{`${column} ${comparison} ${value} `}</span>
            <Button value={ column } label="X" onClick={ handleClick } />
          </div>
        ))}
      </div>
    );
  }
  return <div>Crie seus filtros</div>;
}
