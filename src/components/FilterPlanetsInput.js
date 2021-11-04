import React, { useContext } from 'react';
import MyContext from '../context';

export default function FilterPlanetsByInput() {
  const { filterContext:
    { filters: { filterByName: { setName } } } } = useContext(MyContext);

  const handleChange = ({ target: { value } }) => {
    setName(value);
  };

  return (
    <div>
      <input
        data-testid="name-filter"
        type="text"
        onChange={ handleChange }
      />
    </div>
  );
}
