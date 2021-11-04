import React, { useContext, useEffect } from 'react';
import PlanetsSearchContext from '../../context/PlanetsSearchContext';

export default function FilterByName() {
  const {
    filterOptions,
    setFilterOptions,
    planets,
    setFilteredPlanets,
  } = useContext(PlanetsSearchContext);

  const handleChange = ({ target: { value } }) => {
    setFilterOptions({
      ...filterOptions,
      filters: {
        ...filterOptions.filters,
        filterByName: {
          name: value,
        },
      },
    });
  };

  useEffect(() => {
    const filterByName = () => {
      const { filters: { filterByName: { name } } } = filterOptions;
      setFilteredPlanets(planets
        .filter((planet) => planet[0][1].includes(name)));
    };
    filterByName();
  }, [filterOptions, planets, setFilteredPlanets]);

  return (
    <input
      type="text"
      name="nome"
      id="nome"
      placeholder="Filtrar por nome:"
      onChange={ handleChange }
      value={ filterOptions.filters.filterByName.name }
      data-testid="name-filter"
    />
  );
}
