import React from 'react';
import { useData } from '../context/DataContext';

export default function THead() {
  const { apiDataRaw } = useData();
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
