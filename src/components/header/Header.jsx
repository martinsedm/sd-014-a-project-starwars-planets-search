import React, { useContext, useState } from 'react';
import starWarsPlanetsContext from '../../context/StarWarsPlanetsContext';
import RenderFilters from './RenderFilter';
import Selector from './Selector';

function Header() {
  const [sort, setSort] = useState('ASC');
  const [columnSort, setColumnSort] = useState('name');

  const {
    filters,
    setFilters,
    optionsFilter,
    setOptionsFilter,
  } = useContext(starWarsPlanetsContext);

  const { filterByNumericValues } = filters;

  const columns = ['population', 'orbital_period',
    'diameter', 'rotation_period', 'surface_water'];
  const comparisonOptions = ['maior que', 'menor que', 'igual a'];

  const handleChange = ({ target: { name, value } }) => {
    setOptionsFilter((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleClick = (optionFilter) => {
    setFilters((prevState) => {
      if (!prevState.filterByNumericValues.length) {
        return {
          ...prevState,
          filterByNumericValues: [{
            ...optionFilter,
          },
          ],
        };
      } return {
        ...prevState,
        filterByNumericValues:
          [
            ...prevState.filterByNumericValues,
            { ...optionFilter },
          ],
      };
    });
  };

  const setOptionsColumns = () => {
    let copyColumns = columns;
    const optionColumn = filterByNumericValues.map(({ column }) => column);
    optionColumn.forEach(
      (item) => {
        copyColumns = copyColumns.filter(
          (col) => col !== item,
        );
      },
    );
    return copyColumns;
  };

  const optionsColumns = setOptionsColumns();

  const handleRemoveFilter = (col) => {
    const removeFilter = filterByNumericValues.filter((item) => item.column !== col);
    setFilters({
      ...filters,
      filterByNumericValues: removeFilter,
    });
  };

  return (
    <header>
      <h1> Star Wars Planets </h1>
      <form>
        <div>
          <label htmlFor="filterByName">
            Filter By Name:
            <input
              id="filterByName"
              data-testid="name-filter"
              onChange={ ({ target: { value } }) => setFilters({
                ...filters,
                filterByName: {
                  name: value,
                },
              }) }
            />
          </label>
        </div>
        <div>
          <Selector
            testid="column-filter"
            options={ optionsColumns }
            name="column"
            value={ optionsFilter.column }
            handleChange={ handleChange }
          />
          <Selector
            testid="comparison-filter"
            options={ comparisonOptions }
            name="comparison"
            value={ optionsFilter.comparison }
            handleChange={ handleChange }
          />
          <input
            type="number"
            data-testid="value-filter"
            name="value"
            value={ optionsFilter.value }
            onChange={ handleChange }
          />
          <button
            type="button"
            data-testid="button-filter"
            onClick={ () => handleClick(optionsFilter) }
          >
            Filtrar
          </button>
        </div>
        <div>
          <RenderFilters
            filters={ filterByNumericValues }
            handleClick={ handleRemoveFilter }
          />
        </div>
        <div>
          Ordenamento
          <select
            data-testid="column-sort"
            onChange={ ({ target }) => setColumnSort(target.value) }
          >
            <option value="name">Name</option>
            <option value="climated">Climated</option>
            <option value="created">Created</option>
            <option value="diameter">Diameter</option>
            <option value="edited">Edited</option>
            <option value="films">Films</option>
            <option value="gravity">Gravity</option>
            <option value="orbital_period">Orbital Period</option>
            <option value="population">Population</option>
            <option value="rotation_period">Rotation Period</option>
            <option value="surface_water">SurfaceWater</option>
            <option value="terrain">Terrain</option>
            <option value="url">URL</option>
          </select>
          <label htmlFor="asc">
            ASC
            <input
              data-testid="column-sort-input-asc"
              type="radio"
              name="order"
              id="asc"
              value="ASC"
              defaultChecked
              onClick={ ({ target }) => setSort(target.value) }
            />
          </label>
          <label htmlFor="desc">
            DESC
            <input
              data-testid="column-sort-input-desc"
              type="radio"
              name="order"
              id="desc"
              value="DESC"
              onClick={ ({ target }) => setSort(target.value) }
            />
          </label>
          <button
            type="button"
            data-testid="column-sort-button"
            onClick={ () => setFilters({

              ...filters,
              order: {
                column: columnSort,
                sort,
              },

            }) }
          >
            Ordenar
          </button>
        </div>

      </form>
    </header>
  );
}
export default Header;
