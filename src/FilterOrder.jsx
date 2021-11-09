import React, { useContext, useState } from 'react';
import PlanetsContext from './context/PlanetsContext';

function FilterOrder() {
  const { data, getFilterOrder } = useContext(PlanetsContext);
  const [sortOrder, setSortOrder] = useState({ column: 'name', sort: 'ASC' });

  const categSelectMaker = () => {
    if (!data[0]) return null;
    // improvised Loading ^
    const allColumns = Object.keys(data[0])
      .map((column) => (
        <option
          key={ `categoy-${column}` }
          name={ column }
        >
          {column}
        </option>));
    return allColumns;
  };

  const handleRadioSort = ({ target }) => {
    setSortOrder({ ...sortOrder, sort: target.value });
  };

  const handleColumnSort = ({ target }) => {
    setSortOrder({ ...sortOrder, column: target.value });
  };

  const submitSorting = () => {
    const { column, sort } = sortOrder;
    getFilterOrder(column, sort);
    // console.log(column, sort);
  };

  return (
    <>
      <select data-testid="column-sort" onChange={ handleColumnSort }>
        {categSelectMaker()}
      </select>
      <div className="radioButton">
        <td>
          Ascendente
          <input
            type="radio"
            value="ASC"
            data-testid="column-sort-input-asc"
            checked={ sortOrder.sort === 'ASC' }
            onClick={ handleRadioSort }
          />
        </td>
        <td>
          Descendente
          <input
            type="radio"
            value="DESC"
            data-testid="column-sort-input-desc"
            checked={ sortOrder.sort === 'DESC' }
            onClick={ handleRadioSort }
          />
        </td>
      </div>
      <button
        data-testid="column-sort-button"
        type="button"
        onClick={ submitSorting }
      >
        Submit
      </button>
    </>
  );
}

export default FilterOrder;
