import React, { useContext, useState } from 'react';
import PlanetsContext from '../context/PlanetsContext';

function Table() {
  const { planetsData } = useContext(PlanetsContext);
  const [filters, setFilters] = useState(
    {
      filterByName: {
        name: '',
      },
    },
  );
  const [filteredPlanets, setFilteredPlanet] = useState([]);
  const [isSearching, setIsSearchin] = useState(false);

  const planetFilter = (e) => {
    filters.filterByName.name = e.target.value;
    const { name, value } = e.target;
    setFilters((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    setFilteredPlanet(planetsData.filter(
      (planet) => planet.name.toLowerCase().includes(
        filters.filterByName.name.toLowerCase(),
      ),
    ));
    setIsSearchin(true);
  };

  return (
    <div>

      <input
        data-testid="name-filter"
        value={ filters.filterByName.name }
        type="text"
        onChange={ planetFilter }
      />
      <table>
        <thead>
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
        </thead>
        <tbody>
          {
            isSearching ? filteredPlanets.map((planet) => (
              <tr key={ planet.name }>
                <td>{planet.name}</td>
                <td>{planet.rotation_period}</td>
                <td>{planet.orbital_period}</td>
                <td>{planet.diameter}</td>
                <td>{planet.climate}</td>
                <td>{planet.gravity}</td>
                <td>{planet.terrain}</td>
                <td>{planet.surface_water}</td>
                <td>{planet.population}</td>
                <td>{planet.films}</td>
                <td>{planet.created}</td>
                <td>{planet.edited}</td>
                <td>{planet.url}</td>
              </tr>))
              : planetsData.map((planet) => (
                <tr key={ planet.name }>
                  <td>{planet.name}</td>
                  <td>{planet.rotation_period}</td>
                  <td>{planet.orbital_period}</td>
                  <td>{planet.diameter}</td>
                  <td>{planet.climate}</td>
                  <td>{planet.gravity}</td>
                  <td>{planet.terrain}</td>
                  <td>{planet.surface_water}</td>
                  <td>{planet.population}</td>
                  <td>{planet.films}</td>
                  <td>{planet.created}</td>
                  <td>{planet.edited}</td>
                  <td>{planet.url}</td>
                </tr>))
          }
        </tbody>
      </table>
    </div>
  );
}
export default Table;
