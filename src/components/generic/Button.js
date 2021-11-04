import React from 'react';
import PropTypes from 'prop-types';

function Button(props) {
  const { testId, text, onClick } = props;
  return (
    <button
      type="button"
      onClick={ onClick }
      data-testid={ testId }
    >
      { text }
    </button>
  );
}

Button.defaultProps = {
  testId: '',
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  testId: PropTypes.string,
};

export default Button;
