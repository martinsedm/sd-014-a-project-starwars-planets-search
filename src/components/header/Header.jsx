import React, { useContext } from 'react';
import starWarsPlanetsContext from '../../context/StarWarsPlanetsContext';
import RenderFilters from './RenderFilter';
import Selector from './Selector';

function Header() {
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
      </form>
    </header>
  );
}
export default Header;
