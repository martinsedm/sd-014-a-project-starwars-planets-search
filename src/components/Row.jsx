import React from 'react';
import PropTypes from 'prop-types';

export default function Row({ records }) {
  const keyObj = Object.keys(records);
  return (
    <tr key={ records.name }>
      {
        keyObj
          .map((key) => key !== 'residents' && <td key={ key }>{ records[key] }</td>)
      }
    </tr>
  );
}

Row.propTypes = {
  records: PropTypes.objectOf(PropTypes.any).isRequired,
};
