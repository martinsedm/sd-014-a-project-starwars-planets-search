import React from 'react';
import { numberFilters } from '../data';

function NumberFilter() {
  return (
    <form>
      <select data-testid="column-filter">
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
      <select data-testid="comparison-filter">
        <option value="more">Maior que</option>
        <option value="less">Menor que</option>
        <option value="even">Igual a</option>
      </select>
      <input type="number" data-testid="value-filter" />
    </form>
  );
}

export default NumberFilter;
