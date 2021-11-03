import React, { useContext } from 'react';
import TableContext from '../context/TableContext';

function Table() {
  const { response: { data },
    filterText,
    comparsion,
    value,
    colum,
    filter,
    createTd,
  } = useContext(TableContext);

  const genertateTd = () => data.filter((planet) => planet.name.includes(filterText))
    .map((planets, index) => createTd(planets, index));

  const tableHeader = () => (
    <thead>
      <tr>
        <th> name </th>
        <th> rotation period </th>
        <th> orbital period </th>
        <th> diameter </th>
        <th> climate </th>
        <th> gravity </th>
        <th> terrain </th>
        <th> surface water </th>
        <th> population </th>
        <th> films </th>
        <th> created </th>
        <th> edited </th>
        <th> url </th>
      </tr>
    </thead>
  );

  const filterNumber = () => {
    let result;
    switch (comparsion) {
    case 'igual a':
      result = (planet) => Number(planet[colum]) === Number(value);
      break;
    case 'menor que':
      result = (planet) => Number(planet[colum]) < Number(value);
      break;
    case 'maior que':
      result = (planet) => Number(planet[colum]) > Number(value);
      break;
    default: return null;
    }

    const filtered = data.filter((planet) => result(planet))
      .map((planets, index) => createTd(planets, index));
    return filtered;
  };

  return (
    <table>
      {tableHeader()}
      <tbody>
        {filter === true ? filterNumber() : genertateTd() }
      </tbody>
    </table>
  );
}

export default Table;
