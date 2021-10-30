import React, { useContext } from 'react';

import { PlanetState } from '../Context/PlanetProvider';

const FilterDisableButton = () => {
  const {
    values: { filter: { filters: { filterByNumericValues } } },
    methods: { removeFilter },
  } = useContext(PlanetState);

  if (filterByNumericValues.length === 0) return null;

  return (
    <>
      {filterByNumericValues.map(({ comparison, column, value }, i) => (
        <div key={ i } data-testid="filter">
          <p>{`${column} ${comparison} ${value}`}</p>
          <button
            type="button"
            onClick={ () => removeFilter({ comparison, value, column }) }
          >
            X
          </button>
        </div>
      ))}
    </>
  );
};

export default FilterDisableButton;
