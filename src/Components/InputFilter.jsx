import React, { useContext } from 'react';
import ContextPlanet from '../Context/ContextPlanet';

export default function InputFilter() {
  const context = useContext(ContextPlanet);
  const { setInputFilter } = context;
  return (
    <div>
      <input
        data-testid="name-filter"
        type="text"
        onChange={ (e) => setInputFilter(e.target.value) }
        placeholder="Filter by name"
      />
    </div>
  );
}
