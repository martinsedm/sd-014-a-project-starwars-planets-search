import React from 'react';
import PropsTypes from 'prop-types';

class Input extends React.Component {
  render() {
    const { type, name, onChange, value, testId, label } = this.props;
    const dataTestId = (testId !== undefined ? testId : `${name}-input`);
    return (
      <label htmlFor={ name }>
        { label }
        <input
          id={ name }
          type={ type }
          name={ name }
          data-testid={ dataTestId }
          value={ value }
          onChange={ onChange }
        />
      </label>
    );
  }
}

Input.propTypes = {
  type: PropsTypes.string.isRequired,
  name: PropsTypes.string.isRequired,
  onChange: PropsTypes.func.isRequired,
  value: PropsTypes.string.isRequired,
  testId: PropsTypes.string.isRequired,
  label: PropsTypes.string.isRequired,
};

export default Input;
