import React, { useContext } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import StarsWarsContext from '../contexts/StarWarsContext';

import { REMOVE_NUM_FILTER } from '../reducer';

function RenderFilters() {
  const { filters: { filterByNumericValues }, dispatch } = useContext(StarsWarsContext);
  return (
    <section>
      <ListGroup>
        { filterByNumericValues.map((filter, index) => {
          const { column, comparison, value } = filter;
          return (
            <ListGroup.Item key={ index }>
              {`${column} ${comparison} ${value}` }
              <Button
                variant="danger"
                onClick={ () => dispatch(
                  { type: REMOVE_NUM_FILTER,
                    payload: { ...filter },
                  },
                ) }
              >
                x
              </Button>
            </ListGroup.Item>
          );
        }) }
      </ListGroup>
    </section>
  );
}

export default RenderFilters;
