import React, { useContext, useEffect } from 'react';
import PlanetContext from '../../contexts/PlanetContext';

export default function FilterCard() {
  const { filters, setFilter } = useContext(PlanetContext);
  const { filterByNumericValues } = filters;

  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filterByNumericValues]);

  const handleBtnClick = (filter) => {
    const newFilters = filterByNumericValues.filter((item) => item.column !== filter);
    setFilter({ ...filters, filterByNumericValues: newFilters });
  };

  return (
    <div>
      { filterByNumericValues.map((item) => (
        <span key={ item.column } data-testid="filter">
          {`${item.column} ${item.comparison} ${item.value}`}
          <button onClick={ () => handleBtnClick(item.column) } type="button">X</button>
        </span>
      ))}
    </div>
  );
}
