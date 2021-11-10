import React, { useContext } from 'react';
import { comparisonSuport, columnSuport } from '../services/data';
import MyContext from '../context/MyContext';

function PlanetsFilter() {
  const {
    // planets,
    filteredPlanets,
    setFilteredPlanets,
    filter,
    setFilter,
    numericFilter,
    setNumericFilter,
  } = useContext(MyContext);

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setNumericFilter({
      ...numericFilter,
      [name]: value,
    });
  };

  const handleClick = async () => {
    const { column, comparison, value } = numericFilter;
    const newPlanets = filteredPlanets.filter((planet) => {
      const filteredPlanet = planet[column];
      if (comparison === 'maior que') {
        return filteredPlanet > Number(value);
      }
      if (comparison === 'menor que') {
        return filteredPlanet < Number(value);
      }
      return filteredPlanet === value;
    });
    setFilter({
      ...filter,
      filterByNumericValues: [
        numericFilter,
      ],
    });
    setFilteredPlanets(newPlanets);
  };

  function columnOption() {
    const { column } = numericFilter;
    return (columnSuport
      .filter((colun) => colun !== column)
      .map((col) => (
        <option key={ col } value={ col }>{ col }</option>
      )));
  }

  return (
    <div>
      <select data-testid="column-filter" name="column" onChange={ handleChange }>
        { columnOption() }
      </select>
      <select name="comparison" onChange={ handleChange } data-testid="comparison-filter">
        {comparisonSuport.map((opt) => (
          <option key={ opt } name={ opt } value={ opt }>{ opt }</option>
        ))}
      </select>
      <input
        data-testid="value-filter"
        type="number"
        onChange={ handleChange }
        name="value"
        className="input-text"
      />
      <button
        type="button"
        data-testid="button-filter"
        onClick={ handleClick }
      >
        Filtrar
      </button>
    </div>
  );
}

export default PlanetsFilter;
