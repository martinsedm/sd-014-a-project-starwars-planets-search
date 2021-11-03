import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Context from '../context/Context';

function SelectColumn({ setColumnName }) {
  const INITIAL_STATE = [
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ];

  const [columnValues, setColumnValues] = useState(INITIAL_STATE);
  const { filters } = useContext(Context);

  useEffect(() => {
    const { filterByNumericValues } = filters;
    const newColumnValues = [...columnValues];
    filterByNumericValues.forEach(({ column }) => {
      if (newColumnValues.includes(column)) {
        const i = newColumnValues.indexOf(column);
        //  https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
        newColumnValues.splice(i, 1);
      }
    });
    setColumnValues(newColumnValues);
  }, [filters]);

  return (
    <select
      data-testid="column-filter"
      onChange={ ({ target }) => setColumnName(target.value) }
    >
      { columnValues.map(
        (columnValue) => (
          <option value={ columnValue } key={ columnValue }>
            { columnValue }
          </option>
        ),
      ) }
    </select>
  );
}

SelectColumn.propTypes = {
  setColumnName: PropTypes.func.isRequired,
};

export default SelectColumn;
