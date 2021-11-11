import React from 'react';
import PropTypes from 'prop-types';
import './Table.css';

const Table = ({ headers, data }) => (
  <table>
    <thead>
      <tr>
        {headers.map((header, index) => (
          <th key={ index } style={ { textTransform: 'capitalize' } }>
            {header.replace('_', ' ')}
          </th>
        ))}
      </tr>
    </thead>
    <tbody>
      {data.map((planet, index) => (
        <tr key={ index }>
          {headers.map((header, key) => (
            <td key={ key }>{planet[header]}</td>
          ))}
        </tr>
      ))}
    </tbody>
  </table>
);

Table.propTypes = {
  headers: PropTypes.arrayOf(PropTypes.string).isRequired,
  data: PropTypes.objectOf.isRequired,
};

export default Table;
