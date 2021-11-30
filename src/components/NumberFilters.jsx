import React, { useContext, useEffect } from 'react';
import Context from '../contexts/Context';
import Button from './atomos/Button';

export default function NumberFilters() {
  const { filters, setFilters, columns, setColumns,
    filterPlanets, setFilterPlanets, planets } = useContext(Context);
  // const { middleStage, setMidleStage } = useState(planets);
  const { filterByNumericValues } = filters;

  function handleClick({ target: { value } }) {
    const deletedFilter = filterByNumericValues
      .filter((eachFilter) => eachFilter.column !== value);
    setFilters({
      ...filters,
      filterByNumericValues: deletedFilter,
    });
    setFilterPlanets(planets);
    setColumns([...columns, value]);
  }

  useEffect((() => {
    function planetsFilter(column, comparison, value) {
      const resultArray = filterPlanets.filter((planet) => {
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
      let filteredPlanets = [];
      filterByNumericValues.forEach(({ column, comparison, value }) => {
        filteredPlanets = planetsFilter(column, comparison, value);
      });
      setFilterPlanets(filteredPlanets);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }), [filterByNumericValues]);

  if (filterByNumericValues.length > 0) {
    return (
      <div>
        {filterByNumericValues.map(({ column, comparison, value }) => (
          <div key={ column } data-testid="filter">
            <span>{`${column} ${comparison} ${value} `}</span>
            <Button value={ column } label="X" onClick={ handleClick } />
          </div>
        ))}
      </div>
    );
  }
  return <div>Crie seus filtros</div>;
}
