import React, { useContext } from 'react';
import PlanetsContext from '../contextAPI/PlanetsContext';
import columnName from '../random/columnName';

export default function UsedFilters() {
  const { filters, setFilters } = useContext(PlanetsContext);
  const { filterByNumericValues } = filters;

  const handleClick = (index) => {
    const filter = [...filterByNumericValues];
    filter.splice(index, 1);
    setFilters({
      ...filters,
      filterByNumericValues: filter,
    });
  };

  return (
    <div className="used-filters">
      <p>Filtros já utilizados</p>
      { filterByNumericValues.map(({ column, comparison, value }, index) => (
        <div key={ index } className="">
          <div data-testid="filter" className="single-filter">
            {`${columnName(column)} ${comparison} ${value}`}
            <button type="button" onClick={ () => handleClick(index) }>X</button>
          </div>

        </div>
      ))}
    </div>
  );
}
