import React from 'react';
import { numberFilters } from '../data';

function NumberFilter() {
  return (
    <form>
      <select>
        {
          Object.keys(numberFilters)
            .map((key) => (
              <option
                value={ key }
                key={ key }
              >
                { numberFilters[key] }
              </option>
            ))
        }
      </select>
    </form>
  );
}

export default NumberFilter;
