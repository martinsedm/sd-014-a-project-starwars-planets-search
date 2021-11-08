import React, { useContext } from 'react';
import AppContext from '../context/MyContext';

export default function FormFiltre() {
  const { filterNamePlanet, setFilterNamePlanet } = useContext(AppContext);
  return (
    <form>
      <input
        type="text"
        placeholder="Por Nome"
        data-testid="name-filter"
        name="name"
        value={ filterNamePlanet }
        onChange={ (e) => setFilterNamePlanet(e.target.value) }
      />
    </form>
  );
}
