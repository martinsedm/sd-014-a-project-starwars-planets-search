import React, { useContext } from 'react';
import AppContext from '../context/AppContext';

export default function Table() {
  const { data, searchFilter } = useContext(AppContext);

  function tableHead() {
    if (!data.length) return null;
    const columns = Object.keys(data[0]);
    return (
      <thead>
        <tr>
          { columns.map((column) => (
            <th key={ column }>
              {column}
            </th>
          ))}
        </tr>
      </thead>
    );
  }

  function tableCells() {
    if (!data.length) return null;
    return (
      <tbody>
        { searchFilter().map((cell, index) => (
          <tr key={ index }>
            { Object.values(cell).map((info, id) => (
              <td key={ id }>
                {info}
              </td>)) }
          </tr>
        ))}
      </tbody>
    );
  }

  return (
    <table>
      { tableHead() }
      { tableCells() }
    </table>
  );
}
