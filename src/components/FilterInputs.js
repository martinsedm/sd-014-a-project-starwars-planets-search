import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';

function FilterInputs() {
  const { setFilterByName } = useContext(PlanetsContext);

  // function teste() {
  //   setPlanetInfo(planetInfo.map(() => planetInfo.name.includes()));
  // }
  function handleChange(event) {
    const filterName = {
      filterByName: {
        name: (event.target.value).toLowerCase(),
      },
    };
    setFilterByName(filterName);
  }

  return (
    <input
      type="search"
      placeholder="Filtrar por nome"
      data-testid="name-filter"
      onChange={ handleChange }
    />
  );
}

export default FilterInputs;
