import React from 'react';
import { useData, useFiltersInfo } from '../context/DataContext';
import useFilter from '../hooks/useFilter';

export default function TBody() {
  const { apiDataRaw } = useData();
  const { filters } = useFiltersInfo();
  const { dataFiltered } = useFilter(apiDataRaw, filters);

  return (
    <tbody>
      {dataFiltered.map((planet, i) => {
        const info = Object.entries(planet);
        return (
          <tr key={ i }>
            {info.map(([key, value]) => (
              <td
                key={ key }
                data-testid={ key === 'name' ? 'planet-name' : 'planet-info' }
              >
                { value }
              </td>
            ))}
          </tr>
        );
      })}
    </tbody>
  );
}
