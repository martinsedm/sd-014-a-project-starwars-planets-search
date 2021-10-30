import React from 'react';
import PropTypes from 'prop-types';

import TableHeaders from './TableHeaders';
import TableRow from './TableRow';

export default function Table({ data }) {
  return (
    <table className="table table-dark table-striped">
      <thead>
        <TableHeaders />
      </thead>
      <tbody>
        {data.map((planet) => <TableRow key={ planet.name } planet={ planet } />)}
      </tbody>
    </table>
  );
}

Table.propTypes = { data: PropTypes.arrayOf(PropTypes.object).isRequired };
