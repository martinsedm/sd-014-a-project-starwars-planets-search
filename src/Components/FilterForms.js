import React, { useContext } from 'react';

import { PlanetState } from '../Context/PlanetProvider';

const TextFilter = () => {
  const {
    values: {
      filter: { filters: { filterByName: { name } } },
    },
    methods: {
      applyTextFilter,
    },
  } = useContext(PlanetState);

  return (
    <label htmlFor="name-filter">
      <input
        name="name"
        type="text"
        id="name-filter"
        data-testid="name-filter"
        value={ name }
        onChange={ (e) => applyTextFilter(e) }
      />
    </label>
  );
};

export default TextFilter;
