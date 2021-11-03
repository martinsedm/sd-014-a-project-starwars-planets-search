import React from 'react';
import PropTypes from 'prop-types';

function LineTable() {
  // const { line } = props;
  return (
    <tr>
      {
      // coloque os dados da linha
      }
    </tr>
  );
}

LineTable.propTypes = {
  props: PropTypes.shape({
    // valide os valores do objeto passado por props
    line: PropTypes.objectOf(PropTypes.string).isRequired,
  }).isRequired,
};
