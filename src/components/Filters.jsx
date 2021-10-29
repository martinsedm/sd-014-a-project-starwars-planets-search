import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';

function Filters() {
  const { setFilter, filters } = useContext(PlanetsContext);
  const { filters: { filterByName } } = filters;

  const filterByNameFunc = ({ target: { value } }) => (
    setFilter({ filterByName: { name: value } }));

  return (
    // <>
    <label htmlFor="by-name">
      Filter By Name
      <input
        data-testid="name-filter"
        type="text"
        value={ filterByName.name }
        id="by-name"
        onChange={ filterByNameFunc }
      />
    </label>
    // </>
  );
}

export default Filters;
