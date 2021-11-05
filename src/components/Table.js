import React, { useContext, useState, useEffect } from 'react';
import myContext from '../context/myContext';

function Table() {
  const [loading, setLoading] = useState(true);
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

  useEffect(() => {
    if (dataFiltered.length !== 0) setLoading(false);
    if (dataFiltered === 0) setLoading(true);
  }, [dataFiltered]);

  return (
    <table>
      <thead>
        <tr>
          {!loading && formattedHeaders.map((header, i) => (
            <th key={ i }>{ header }</th>))}
        </tr>
      </thead>
      <tbody>
        {!loading && dataFiltered.map((planet, i) => (
          <tr key={ i }>
            {headers.map((header) => (
              <td key={ header + planet.name }>{planet[header]}</td>))}
          </tr>))}
      </tbody>
    </table>
  );
}

export default Table;
