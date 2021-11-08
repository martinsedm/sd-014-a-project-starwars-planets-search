import React, { useContext } from 'react';
import MyContext from '../context';

export default function DeleteFilters() {
  const { filterContext:
    { filters:
      { filterByNumericValues, setFilterByNumericValues } } } = useContext(MyContext);

  const handleClick = ({ target: { name } }) => {
    const deleteFilters = filterByNumericValues.filter((fil) => fil.column !== name);
    setFilterByNumericValues(deleteFilters);
  };

  const deleteFilter = () => {
    const xablau = 'X';
    return filterByNumericValues.map(({ column, comparison, value }) => (
      <div key={ value } data-testid="filter">
        <p key={ value }>
          {`${column} ${comparison} ${value}`}
        </p>
        <button
          name={ column }
          onClick={ handleClick }
          type="button"
        >
          { xablau }
        </button>
      </div>
    ));
  };

  return (
    <div>
      { filterByNumericValues ? deleteFilter() : null }
    </div>
  );
}
