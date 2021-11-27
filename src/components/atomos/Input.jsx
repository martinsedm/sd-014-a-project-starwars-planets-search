import React from 'react';
import PropsTypes from 'prop-types';

class Input extends React.Component {
  render() {
    const { type, name, onChange, value, testId, label, placeHolder } = this.props;
    return (
      <label htmlFor={ name }>
        { label }
        <input
          id={ name }
          type={ type }
          name={ name }
          value={ value }
          data-testid={ `${testId}-filter` }
          onChange={ onChange }
          placeholder={ placeHolder }
        />
      </label>
    );
  }
}

Input.propTypes = {
  type: PropsTypes.string,
  name: PropsTypes.string,
  onChange: PropsTypes.func.isRequired,
  testId: PropsTypes.string,
  label: PropsTypes.string,
  value: PropsTypes.string,
  placeHolder: PropsTypes.string,
};

Input.defaultProps = {
  type: 'text',
  name: 'input',
  testId: 'input',
  label: '',
  placeHolder: '',
  value: '',
};

export default Input;
