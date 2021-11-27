import React from 'react';
import PropsTypes from 'prop-types';

class Button extends React.Component {
  render() {
    const { name, data, onClick, disabled, label } = this.props;
    return (
      <button
        type="button"
        data-testid={ `${data}-filter` }
        disabled={ disabled }
        onClick={ onClick }
        name={ name }
      >
        {label}
      </button>

    );
  }
}

Button.propTypes = {
  label: PropsTypes.string.isRequired,
  name: PropsTypes.string,
  onClick: PropsTypes.func.isRequired,
  disabled: PropsTypes.bool,
  data: PropsTypes.string,
};

Button.defaultProps = {
  name: 'button',
  disabled: false,
  data: 'button',
};

export default Button;
