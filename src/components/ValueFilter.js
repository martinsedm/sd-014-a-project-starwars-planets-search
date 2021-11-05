import PropTypes from 'prop-types';
import React from 'react';

export default function Value({ value }) {
  return (
    <label htmlFor="value-filter">
      <input
        onChange={ (event) => value(event.target.value) }
        data-testid="value-filter"
        type="number"
        name="value-filter"
      />
    </label>
  );
}

Value.propTypes = {
  value: PropTypes.func,
}.isRequired;
