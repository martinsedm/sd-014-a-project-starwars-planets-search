import React from 'react';
import PropsTypes from 'prop-types';

class Button extends React.Component {
  render() {
    const { name, data, onClick, disabled, label, value } = this.props;
    return (
      <button
        type="button"
        data-testid={ data }
        disabled={ disabled }
        onClick={ onClick }
        name={ name }
        value={ value }
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
  value: PropsTypes.string,
};

Button.defaultProps = {
  name: 'button',
  disabled: false,
  data: 'button',
  value: '',
};

export default Button;
