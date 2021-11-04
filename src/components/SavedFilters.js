import React, { useContext } from 'react';
import planetContext from '../context';
import { RemoveButton, FilterSaved } from '../style/style';

function SavedFilters() {
  const { filter, setFilter } = useContext(planetContext);

  const hendleClick = (column) => {
    const filteredByNumVal = filter.filters.filterByNumericValues;
    setFilter({ filters: {
      ...filter.filters,
      filterByNumericValues:
      filteredByNumVal.filter((value) => !Object.values(value).includes(column)) } });
  };

  return (
    <div>
      {
        filter.filters.filterByNumericValues.length > 0
        && filter.filters.filterByNumericValues.map((item, index) => {
          const { column, comparision, value } = item;

          return (
            <FilterSaved key={ index } data-testid="filter">
              { `${column} ${comparision} ${value}`}
              <RemoveButton
                type="button"
                onClick={ () => { hendleClick(column); } }
              >
                X
              </RemoveButton>
            </FilterSaved>
          );
        })
      }
    </div>
  );
}

export default SavedFilters;
