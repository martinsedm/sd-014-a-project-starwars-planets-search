import React, { useContext, useEffect, useState } from 'react';
import MainContext from '../context/MainContext';

export default function Filter() {
  const { filters, setFilters } = useContext(MainContext);

  return (
    <div>
      <input
        onChange={ ({ target: { value } }) => {
          setFilters({
            ...filters,
            filterByName: {
              name: value,
            },
          });
        } }
        data-testid="name-filter"
        placeholder="filtrar por nome"
      />
      <p>{ filters.filterByName.name }</p>
    </div>
  );
}
