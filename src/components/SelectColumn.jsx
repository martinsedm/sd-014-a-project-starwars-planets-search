import React from 'react';
import PropTypes from 'prop-types';

function SelectColumn({ setColumnName }) {
  const columnValues = [
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ];

  return (
    <select
      data-testid="column-filter"
      onChange={ ({ target }) => setColumnName(target.value) }
    >
      { columnValues.map((columnValue) => {
        return <option value={ columnValue } key={ columnValue }>{ columnValue }</option>;
      })}
    </select>
  );
}

SelectColumn.propTypes = {
  setColumnName: PropTypes.func.isRequired,
};

export default SelectColumn;
