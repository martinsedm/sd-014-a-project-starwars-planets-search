import React, { useContext } from 'react';
import { Button, ListGroup } from 'react-bootstrap';

import StarWarsContext from '../context/StarWarsContext';

function RenderSearch() {
  const {
    filters,
    setFilters,
    columnStateGlobal,
    setColumnStateGlobal } = useContext(StarWarsContext);

  const handleClick = (column) => {
    const arrayNumericValues = filters
      .filterByNumericValues
      .filter((filterObj) => (filterObj.column !== column));
    setFilters({
      ...filters,
      filterByNumericValues: arrayNumericValues,
    });
    setColumnStateGlobal([...columnStateGlobal, column]);
  };
  return (
    <ListGroup>
      {filters.filterByNumericValues.map((filter, index) => (
        <ListGroup.Item
          key={ index }
          data-testid="filter"
        >
          <span>
            {`${filter.column}
      ${filter.comparison}
      ${filter.value} `}
          </span>
          <Button
            size="sm"
            type="button"
            onClick={ () => handleClick(filter.column) }
          >
            X
          </Button>
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
}

export default RenderSearch;
