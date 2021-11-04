import React from 'react';

function NumericFilter() {
  const column = [
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ];

  return (
    <div>
      <select data-testid="column-filter">
        {column.map((opt) => (
          <option key={ opt } value={ opt }>{opt}</option>
        ))}
      </select>
      <select data-testid="comparison-filter">
        <option value="maior-que">maior que</option>
        <option value="menor-que">menor que</option>
        <option value="igual">igual a</option>
      </select>
      <input data-testid="value-filter" type="number" />
      <button data-testid="button-filter" type="button">Filtrar</button>
    </div>
  );
}

export default NumericFilter;
