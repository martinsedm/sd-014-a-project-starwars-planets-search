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
        value={ filterNamePlanet }
        onChange={ (e) => setFilterNamePlanet(e.target.value) }
      />
    </form>
  );
}
