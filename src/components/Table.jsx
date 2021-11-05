import React, { useContext, useEffect } from 'react';
import PlanetsContext from '../context/PlanetsContext';
import SearchHeader from './SearchHeader';
import ActiveFilters from './ActiveFilters';

function Table() {
  const {
    loading,
    planets, setPlanets, setLoading, filters, filteredPlanets, filterPlanets,
  } = useContext(PlanetsContext);

  // Faz a requisição à API assim que o componente é montado
  useEffect(() => {
    const getPlanets = async () => {
      const response = await (await fetch('https://swapi-trybe.herokuapp.com/api/planets/')).json();
      setPlanets(response.results);
      setLoading(false);
      console.log('fazendo requisição');
    };
    getPlanets();
  }, [setPlanets, setLoading]);

  useEffect(() => {
    filterPlanets();
  }, [planets, filters]);

  if (loading) return <p>Loading...</p>;
  return (
    <>
      <SearchHeader />
      <ActiveFilters />
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
          { filteredPlanets.map((planet) => (
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
              <td>{planet.films.length}</td>
              <td>{planet.created}</td>
              <td>{planet.edited}</td>
              <td>{planet.url}</td>
            </tr>
          )) }
        </tbody>
      </table>
    </>
  );
}

export default Table;
