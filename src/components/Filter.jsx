import React, { useContext } from 'react';
import StarContext from '../context/context';

function Filter() {
  const { setColumn, setValue, setComparison, filters, setFilter, column,
    comparison, value, dropDown, setDropDown } = useContext(StarContext);

  const setNumerics = () => {
    setFilter({
      ...filters,
      filterByNumericValues: [
        ...filters.filterByNumericValues,
        { column, comparison, value },
      ],
    });
    const filteredDropDown = dropDown.filter((dropd) => dropd !== column);
    setDropDown(filteredDropDown);
  };

  return (
    <form>
      <fieldset>
        <label htmlFor="column-filter">
          <select
            name="column"
            id="column-filter"
            onChange={ ({ target }) => setColumn(target.value) }
            data-testid="column-filter"
          >
            {dropDown
              .map((colum) => <option key={ colum }>{colum}</option>)}
          </select>
        </label>
        <label htmlFor="comparison-filter">
          <select
            name="comparison"
            id="comparison-filter"
            onChange={ ({ target }) => setComparison(target.value) }
            data-testid="comparison-filter"
          >
            <option>maior que</option>
            <option>menor que</option>
            <option>igual a</option>
          </select>
        </label>
        <label htmlFor="value-filter">
          <input
            name="value"
            id="value-filter"
            placeholder="Valor á Filtrar"
            onChange={ ({ target }) => setValue(target.value) }
            data-testid="value-filter"
            type="number"
          />
        </label>
        <button
          onClick={ () => setNumerics() }
          type="button"
          data-testid="button-filter"
        >
          Filtrar
        </button>
      </fieldset>
    </form>
  );
}

export default Filter;
