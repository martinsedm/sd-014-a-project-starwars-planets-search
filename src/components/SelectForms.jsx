import React from 'react';
import PropTypes from 'prop-types';

const SelectForms = (props) => {
  const { values: { dataTestid, options, name }, handleChange } = props;

  return (
    <select
      onChange={ handleChange }
      data-testid={ dataTestid }
      id={ dataTestid }
      name={ name }
    >
      {options.map((option, i) => <option value={ option } key={ i }>{option}</option>)}
    </select>
  );
};

SelectForms.propTypes = {
  dataTestid: PropTypes.string,
}.isRequired;

export default SelectForms;
