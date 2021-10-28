import React from 'react';
import { useData, useFilters } from '../context/DataContext';
import useFilter from '../hooks/useFilter';

export default function TBody() {
  const { apiDataRaw } = useData();
  const { filters } = useFilters();
  const { dataFiltered } = useFilter(apiDataRaw, filters);

  if (!dataFiltered) return null;

  return (
    <tbody>
      {dataFiltered.map((planet, i) => {
        const info = Object.entries(planet);
        return (
          <tr key={ i }>
            {info.map(([key, value]) => (
              <td key={ key }>{ value }</td>
            ))}
          </tr>
        );
      })}
    </tbody>
  );
}
