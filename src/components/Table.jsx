import React from 'react';
import { useDataContext } from '../context/DataContext';

export default function Table() {
  const { apiData } = useDataContext();
  if (!apiData) return null;
  const columns = Object.keys(apiData[0]);
  return (
    <table>
      <thead>
        <tr>
          {columns.map((column, i) => (
            <th key={ i }>{column}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {apiData.map((row, i) => {
          const planets = Object.entries(row);
          return (
            <tr key={ i }>
              {planets.map(([key, value]) => (
                <td key={ key }>{ value }</td>
              ))}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
