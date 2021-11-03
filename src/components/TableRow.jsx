import React from 'react';
import PropTypes from 'prop-types';

function TableRow(props) {
  const { contents, head } = props;
  const tHead = (content, i) => (<th key={ i }>{ content }</th>);
  const tData = (content, i) => (<td key={ i }>{ content }</td>);
  const contentsArray = Object.values(contents);
  if (head) {
    const contentsKeys = Object.keys(contents);
    return (
      <tr>
        {contentsKeys.map((content, i) => tHead(content, i))}
      </tr>
    );
  }
  return (
    <tr>
      {contentsArray.map((content, i) => tData(content, i))}
    </tr>
  );
}

TableRow.propTypes = {
  contents: PropTypes.objectOf(PropTypes.any).isRequired,
  head: PropTypes.bool.isRequired,
};

export default TableRow;
