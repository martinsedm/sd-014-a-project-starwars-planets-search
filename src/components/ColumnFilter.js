import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import starContext from '../context/starContext';

export default function Columm({ column }) {
  const { options } = useContext(starContext);
  const organizeFilterOptions = () => options.map((option) => (
    <option
      key={ option }
      value={ option }
    >
      { option }
    </option>
  ));

  return (
    <div data-testid="filter">
      <select
        data-testid="column-filter"
        onChange={ (event) => column(event.target.value) }
        name="columm"
      >
        { organizeFilterOptions() }
      </select>
    </div>
  );
}

Columm.propTypes = {
  column: PropTypes.func,
}.isRequired;
