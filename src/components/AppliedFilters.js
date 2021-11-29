import React, { useContext } from 'react';
import StarsContext from '../context/myContext';
import '../styles/filters.css';

export default function AppliedFilters() {
  const { filters, setFilter } = useContext(StarsContext);
  const { filterByNumericValues } = filters;

  const handleClick = (i) => {
    const fil = [...filterByNumericValues];
    fil.splice(i, 1);
    setFilter({
      ...filters,
      filterByNumericValues: fil,
    });
  };

  const showFilters = () => (
    <div className="d-flex p-2 bd-highlight">
      <p>Filtros em ação: </p>
      <ul>

        {
          filterByNumericValues.map(({ caracteristic, comparison, value }, i) => (
            <div key={ i }>
              <li data-testid="filter" className="used-filter">
                {
                  `${caracteristic} ${comparison} ${value}`
                }
                <button
                  className="exclude-btn"
                  type="button"
                  onClick={ () => handleClick(i) }
                >
                  X
                </button>
              </li>
            </div>
          ))
        }
      </ul>
    </div>
  );
  const newLocal = showFilters();
  return (
    newLocal
  );
}
