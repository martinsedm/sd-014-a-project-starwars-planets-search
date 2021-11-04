import React, { useContext } from 'react';
import PlanetContext from '../../contexts/PlanetContext';

export default function Name() {
  const { filters, setFilter } = useContext(PlanetContext);

  const handleChange = ({ target }) => {
    const obj = { name: target.value };

    setFilter({ ...filters, filterByName: obj });
  };

  return (
    <div>
      <input
        data-testid="name-filter"
        value={ filters.filterByName.name }
        onChange={ handleChange }
      />
    </div>
  );
}
