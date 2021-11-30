import React from 'react';
import PropTypes from 'prop-types';

function BuscaTexto(props) {
  const { handleChange } = props;
  return (
    <label htmlFor="name">
      Digite o planeta
      <input
        data-testid="name-filter"
        onChange={ (event) => { handleChange(event); } }
        type="text"
        id="name"
        name="name"
      />
    </label>
  );
}
BuscaTexto.propTypes = {
  handleChange: PropTypes.func.isRequired,
};

export default BuscaTexto;
