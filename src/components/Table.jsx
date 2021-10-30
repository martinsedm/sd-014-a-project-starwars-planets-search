import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import planetSearchContext from '../context/planetsSearchContext';
import TableHeaders from './TableHeaders';
import TableRow from './TableRow';

export default function Table({ data }) {
  const { filters } = useContext(planetSearchContext);
  return (
    <table className="table table-dark table-striped">

      <TableHeaders />

      <tbody>
        {data.filter((planet) => RegExp(filters.name, 'i').test(planet.name))
          .map((planet) => <TableRow key={ planet.name } planet={ planet } />)}
      </tbody>
    </table>
  );
}

Table.propTypes = { data: PropTypes.arrayOf(PropTypes.object).isRequired };
