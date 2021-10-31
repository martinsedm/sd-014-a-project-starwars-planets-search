import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import planetSearchContext from '../context/planetsSearchContext';
import TableHeaders from './TableHeaders';
import TableRow from './TableRow';

import filterData from '../utils';

export default function Table({ data }) {
  const { filter } = useContext(planetSearchContext);

  return (
    <table className="table table-dark table-striped">

      <TableHeaders />

      <tbody>
        {filterData(data, filter)
          .map((planet) => <TableRow key={ planet.name } planet={ planet } />)}
      </tbody>
    </table>
  );
}

Table.propTypes = { data: PropTypes.arrayOf(PropTypes.object).isRequired };
