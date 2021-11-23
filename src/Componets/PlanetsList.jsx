import React, { useContext, useEffect, useState } from 'react';

import PlanetsContext from '../Context/PlanetsContext';
import PlanetDetails from './PlanetDetails';

export default function PlanetsList() {
  const { data } = useContext(PlanetsContext);
  const [filterPlanets, setPlanets] = useState(data);
  const [searchText, setSearchText] = useState('');

  const renderInputText = () => (
    <input
      data-testid="name-filter"
      type="text"
      onChange={ ({ target }) => setSearchText(target.value) }
    />
  );

  useEffect(() => {
    const planetsFilter = (text) => {
      const planets = data.filter(({ name }) => name.includes(text));
      setPlanets(planets);
    };
    planetsFilter(searchText);
  }, [searchText, data]);

  return (
    <main>
      { renderInputText() }
      <table>
        <tr>
          <th>Name</th>
          <th>Rotation Period</th>
          <th>Orbital Period</th>
          <th>Diameter</th>
          <th>Climate</th>
          <th>Gravity</th>
          <th>Terrain</th>
          <th>Surface Water</th>
          <th>Population</th>
          <th>Films</th>
          <th>Created</th>
          <th>Edited</th>
          <th>URL</th>
        </tr>
        { filterPlanets.map((e, index) => <PlanetDetails key={ index } planet={ e } />)}
      </table>
    </main>
  );
}
