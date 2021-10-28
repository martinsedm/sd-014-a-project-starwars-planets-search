import React from 'react';
import { useDataContext } from '../context/DataContext';

export default function THead() {
  const { apiDataRaw } = useDataContext();
  console.log('apiDataRaw', apiDataRaw);
  if (!apiDataRaw) return null;
  const columns = Object.keys(apiDataRaw[0]);
  return (
    <thead>
      <tr>
        {columns.map((column, i) => (
          <th key={ i }>{column}</th>
        ))}
      </tr>
    </thead>
  );
}
