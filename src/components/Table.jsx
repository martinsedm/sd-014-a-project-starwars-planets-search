import React from 'react';
import { useDataContext, useFilters } from '../context/DataContext';
import useFilter from '../context/FilterHook';

export default function Table() {
  const { apiData } = useDataContext();
  const { filters } = useFilters();
  const { filteredData } = useFilter(apiData, filters);

  if (!filteredData) return null;
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
        {filteredData.map((row, i) => {
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
