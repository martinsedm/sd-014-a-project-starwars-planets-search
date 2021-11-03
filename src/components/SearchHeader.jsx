import React, { useContext, useState } from 'react';
import PlanetsContext from '../context/PlanetsContext';

export default function SearchHeader() {
  const { filter, setFilter } = useContext(PlanetsContext);
  const [name, setName] = useState('');

  const handleChange = ({ target: { value } }) => {
    setName(value);
    setFilter({ ...filter, filterByName: { name: value.toLowerCase() } });
  };

  return (
    <fieldset>
      <input
        data-testid="name-filter"
        type="text"
        placeholder="Filtar por nome"
        onChange={ handleChange }
        value={ name }
      />
    </fieldset>
  );
}
