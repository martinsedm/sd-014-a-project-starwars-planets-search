import React, { useContext, useState } from 'react';
import PlanetsContext from './context/PlanetsContext';
import './FilterField.css';

function FilterField() {
  const {
    getNameFilter, getValueFilter, filters, getFilterRemoval,
  } = useContext(PlanetsContext);
  const [numFilter, setNumFilter] = useState({}); // THERE'S A PECULIARITY HERE *** MORE AT THE END OF THE PAGE
  // const firstUnspentFilter = Object.keys(spentFilters).find((elem) => !spentFilters[elem]);
  // const [firstAbleFilter, setAbleFilter] = useState(Object.keys(spentFilters).find((elem) => !spentFilters[elem]));
  const [spentFilters, setSpentFilters] = useState({
    population: false,
    orbital_period: false,
    rotation_period: false,
    diameter: false,
    surface_water: false,
  });

  const handleChange = ({ target }) => {
    setNumFilter({
      ...numFilter,
      [target.name]: target.value,
    });
  };

  const submitFilter = () => {
    const { column, comparison, value } = numFilter;
    if (column && comparison && value) {
      // console.log(`column: ${column} | comparison: ${comparison} | value: ${value}`);
      getValueFilter(column, comparison, value);
      setSpentFilters({
        ...spentFilters,
        [column]: true,
      });
    }
  };

  const columnOptions = () => {
    const optionFilter = Object.keys(spentFilters).filter((columnName) => (
      !spentFilters[columnName]
    ));
    const columnRender = optionFilter.map((name, index) => (
      <option
        key={ name }
        value={ name }
        disabled={ spentFilters[name] }
        selected={ index === 0 }
      >
        {name}
      </option>));
    return columnRender;
  };

  const filterDelete = ({ target }) => {
    const { name } = target;
    getFilterRemoval(name);
  };

  const filterGroups = () => {
    const { filterByNumericValues } = filters;
    const allGroups = filterByNumericValues.map((curFilt, index) => {
      if (index === 0) return false;
      const { column, comparison, value } = curFilt;
      return (
        <div key={ `${column}-${index}` } className="filterGroup" data-testid="filter">
          <p>{`${column} ${comparison} ${value}`}</p>
          <button type="button" name={ index } onClick={ filterDelete }>X</button>
        </div>
      );
    });
    return allGroups;
  };

  return (
    <>
      <div>
        <input
          onChange={ getNameFilter }
          data-testid="name-filter"
          placeholder="Which planet do you seek?"
          type="text"
        />
      </div>

      <div>
        <select
          data-testid="column-filter"
          name="column"
          onChange={ handleChange }
        >
          {columnOptions()}
        </select>
        <select
          data-testid="comparison-filter"
          name="comparison"
          onChange={ handleChange }
        >
          <option selected disabled>Comparison</option>
          <option value="maior que">maior que</option>
          <option value="menor que">menor que</option>
          <option value="igual a">igual a</option>
        </select>
        <input
          type="number"
          name="value"
          data-testid="value-filter"
          onChange={ handleChange }
        />
        <button
          type="button"
          onClick={ submitFilter }
          data-testid="button-filter"
        >
          Filter
        </button>
      </div>
      <br />
      {filterGroups()}
    </>
  );
}

export default FilterField;

// **** OBSERVATION: Because the tests from req 4 WANT to see exactly 4 choices after spending one filter, I can't use my placeholder, or it will count as one more than it should everytime. Which means that in the app you'll either have to reselect the column if you want the default (e.g. population, if it's not spent), or you'll end up with a bug that keeps counting it as population if I don't ever choose anything else, despite it being disabled by that point. I chose the former.
