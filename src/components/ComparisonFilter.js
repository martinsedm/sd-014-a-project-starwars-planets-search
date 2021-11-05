import PropTypes from 'prop-types';
import React from 'react';

export default function Comparison({ comparison }) {
  return (
    <div>
      <select
        data-testid="comparison-filter"
        onChange={ (event) => comparison(event.target.value) }
        name="comparison"
      >
        <option value="maior que">maior que</option>
        <option value="menor que">menor que</option>
        <option value="igual a">igual a</option>
      </select>
    </div>
  );
}

Comparison.propTypes = {
  comparison: PropTypes.func,
}.isRequired;
