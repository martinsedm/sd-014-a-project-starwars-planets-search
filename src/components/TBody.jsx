import React from 'react';
import { useDataContext } from '../context/DataContext';

export default function THead() {
  const { apiDataRaw } = useDataContext();
  if (!apiDataRaw) return null;
  return (
    <tbody>
      {apiDataRaw.map((planet, i) => {
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
