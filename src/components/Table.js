import React, { useContext } from 'react';
import myContext from '../context/myContext';

function Table() {
  function capitalizeFirstLetter(string) {
    const words = string.split(' ');
    const capitalize = words.map((word) => word.charAt(0).toUpperCase() + word.slice(1));
    const capitalizedWords = capitalize.join(' ');
    return capitalizedWords;
  }

  const { data, dataFiltered } = useContext(myContext);
  const headers = Object.keys(data[0]).filter((header) => header !== 'residents');
  const formattedHeaders = headers
    .map((header) => capitalizeFirstLetter(header.replace(/_/g, ' ')));

  return (
    <table>
      <thead>
        <tr>
          {formattedHeaders.map((header, i) => (<th key={ i }>{ header }</th>))}
        </tr>
      </thead>
      <tbody>
        {dataFiltered.map((planet, i) => (
          <tr key={ i }>
            {headers.map((header, indx) => (<td key={ indx }>{planet[header]}</td>))}
          </tr>))}
      </tbody>
    </table>
  );
}

export default Table;
