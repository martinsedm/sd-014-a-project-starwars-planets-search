import React, { useContext, useState } from 'react';
import PlanetsContext from '../context/PlanetsContext';

function FilterInputs() {
  const { setPlanetsInfo, planetInfo } = useContext(PlanetsContext);
  const [filters, setFilterByName] = useState({
    filterByName: {
      name: '',
    },
  });

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
    const lower = (event.target.value).toLowerCase();
    const testePlanet = [
      planetInfo.filter(
        (planet) => (planet.name).toLowerCase().includes((lower)),
      )];
    console.log(testePlanet);
    setPlanetsInfo(testePlanet);
    console.log(planetInfo);
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
