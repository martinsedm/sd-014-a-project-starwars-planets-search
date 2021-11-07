import React, { useContext, useState, useEffect } from 'react';
import PlanetsSearchContext from '../../context/PlanetsSearchContext';

function FilterByNumber() {
  const [columnValue, setColumnValue] = useState('population');
  const [comparisonValue, setComparisonValue] = useState('maior que');
  const [numValue, setNumValue] = useState('0');

  const {
    filterOptions,
    setFilterOptions,
    planets,
    setFilteredPlanets,
  } = useContext(PlanetsSearchContext);

  const handleClick = () => {
    setFilterOptions({
      ...filterOptions,
      filters: {
        ...filterOptions.filters,
        filterByNumericValues:
       [...filterOptions.filters.filterByNumericValues, {
         column: columnValue, comparison: comparisonValue, value: numValue }],
      },
    });
  };

  const handleChange = ({ target: { value, name } }) => {
    switch (name) {
    case 'column':
      setColumnValue(value);
      break;
    case 'comparison':
      setComparisonValue(value);
      break;
    case 'numValue':
      setNumValue(value);
      break;
    default:
      return 0;
    }
  };

  useEffect(() => {
    const lastNumericFilterIndex = filterOptions.filters.filterByNumericValues.length - 1;
    const { column, comparison, value,
    } = filterOptions.filters
      .filterByNumericValues.length > 0 ? filterOptions.filters
        .filterByNumericValues[lastNumericFilterIndex]
      : { columnValue, comparisonValue, numValue };
    const filterByNumber = () => {
      setFilteredPlanets(
        planets
          .filter((planet) => {
            let propertyIndex = 0;
            // encontrando o indice da coluna desejada
            planet.map((property) => {
              if (property[0] === column) {
                propertyIndex = planet.indexOf(property);
              }
              return propertyIndex;
            });
            switch (comparison) {
            case 'maior que':
              return Number(planet[propertyIndex][1]) > Number(value);
            case 'menor que':
              return Number(planet[propertyIndex][1]) < Number(value);
            case 'igual a':
              return Number(planet[propertyIndex][1]) === Number(value);
            default:
              return 0;
            }
          }),
      );
    };
    filterByNumber();
  }, [columnValue, comparisonValue, numValue, planets,
    setFilteredPlanets, filterOptions.filters.filterByNumericValues]);

  useEffect(() => {
    const lastNumericFilterIndex = filterOptions.filters.filterByNumericValues.length - 1;
    const selectedFilter = filterOptions.filters
      .filterByNumericValues[lastNumericFilterIndex];

    if (typeof selectedFilter !== 'undefined' && selectedFilter.column !== null) {
      document.getElementById(`${selectedFilter.column}`).remove();
    }
  }, [filterOptions.filters.filterByNumericValues]);

  return (
    <>
      <h2>Filtro por valores numéricos:</h2>
      <label htmlFor="column">
        Escolha uma coluna:
        <select
          name="column"
          id="column"
          data-testid="column-filter"
          onChange={ handleChange }
        >
          <option value="population" id="population">population</option>
          <option value="orbital_period" id="orbital_period">orbital_period</option>
          <option value="diameter" id="diameter">diameter</option>
          <option value="rotation_period" id="rotation_period">rotation_period</option>
          <option value="surface_water" id="surface_water">surface_water</option>
        </select>
      </label>
      <label htmlFor="comparison">
        Faixa de valor:
        <select
          name="comparison"
          id="comparison"
          data-testid="comparison-filter"
          onChange={ handleChange }
        >
          <option value="maior que">maior que</option>
          <option value="menor que">menor que</option>
          <option value="igual a">igual a</option>
        </select>
      </label>
      <label htmlFor="numValue">
        Valor:
        <input
          type="number"
          name="numValue"
          id="numValue"
          data-testid="value-filter"
          placeholder="Digite aqui"
          onChange={ handleChange }
        />
      </label>
      <button
        type="button"
        data-testid="button-filter"
        onClick={ handleClick }
      >
        Filtrar
      </button>
    </>
  );
}

export default FilterByNumber;
