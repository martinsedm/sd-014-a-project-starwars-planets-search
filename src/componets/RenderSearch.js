import React, { useContext } from 'react';
import { Button } from 'react-bootstrap';

import StarWarsContext from '../context/StarWarsContext';

function RenderSearch() {
  const { filters } = useContext(StarWarsContext);
  return (
    <div>
      {filters.filterByNumericValues.map((filter, index) => (
        <div key={ index }>
          <h3>
            {`${filter.column}
      ${filter.comparison}
      ${filter.value}`}
          </h3>
          <Button
            size="sm"
            type="button"
            data-testid="button-filter"
            // onClick={ handleClick }
          >
            x
          </Button>
        </div>
      ))}
    </div>
  );
}

export default RenderSearch;
