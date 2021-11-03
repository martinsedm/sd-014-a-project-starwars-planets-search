import React, { useContext } from 'react';
import AppContext from '../context/AppContext';

function Table() {
  const { data } = useContext(AppContext);

  const tableHead = () => {
    if (!data.length) return null;
    const columns = Object.keys(data[0]);
    delete columns.residents;
    return (
      <tr>
        { columns.map((column) => (
          <th key={ column }>
            {column}
          </th>
        ))}
      </tr>
    );
  };

  const tableCells = () => {
    if (!data.length) return null;
    return (
      data.map((cell, index) => (
        <tr key={ index }>
          { Object.values(cell).map((info, id) => (
            <td key={ id }>
              {info}
            </td>)) }
        </tr>
      ))
    );
  };

  return (
    <table>
      { tableHead() }
      { tableCells() }
    </table>
  );
}

export default Table;
