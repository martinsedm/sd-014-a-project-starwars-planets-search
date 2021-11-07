import React, { useContext, useEffect } from 'react';
import PlanetsContext from '../context/PlanetsContext';
import filter from '../services/filter';
import getPlanetsInfo from '../services/planetsApi';

function Table() {
  const {
    planetInfo,
    filters,
    setPlanetsInfo,
    filterClick, setFilterClick, setFilters } = useContext(PlanetsContext);

  useEffect(() => {
    async function fetchPlanetsInfo() {
      const planetsInfo = await getPlanetsInfo();
      setPlanetsInfo(planetsInfo);
    }
    fetchPlanetsInfo();
  }, [setPlanetsInfo]);

  function displaySelectedFilters() {
    if (filterClick === true) {
      return (
        <div>
          <p>
            {`
          ${filters.filterByNumericValues[0].column} 
          ${filters
          .filterByNumericValues[0].comparison} ${filters.filterByNumericValues[0].value}
          `}
          </p>
          <button
            type="button"
            onClick={ () => {
              const option = document.createElement('option');
              const optionText = document.createTextNode(`${
                filters.filterByNumericValues[0].column}`);
              const selectValue = document.querySelector('#column');
              option.appendChild(optionText);
              setFilterClick(!filterClick);
              selectValue.prepend(option);
              const filtersValues = { ...filters,
                filterByNumericValues: [{
                  column: selectValue.value,
                  comparison: filters.filterByNumericValues[0].comparison,
                  value: filters.filterByNumericValues[0].value,
                }],
              };
              setFilters(filtersValues);
            } }
          >
            X

          </button>
        </div>
      );
    }
  }

  return (
    <table>
      {displaySelectedFilters()}
      <tr>
        <th>Name</th>
        <th>Rotation Period</th>
        <th>Orbital Period</th>
        <th>Diamete</th>
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
      {filter(filters, planetInfo, filterClick).map((info) => {
        const {
          name,
          rotation_period: rotationPeriod,
          orbital_period: orbitalPeriod,
          diameter,
          climate,
          gravity,
          terrain,
          surface_water: surfaceWater,
          population,
          films,
          created,
          edited,
          url,
        } = info;
        return (
          <tr key={ name }>
            <td>{name}</td>
            <td>{rotationPeriod}</td>
            <td>{ orbitalPeriod }</td>
            <td>{ diameter }</td>
            <td>{ climate }</td>
            <td>{gravity}</td>
            <td>{terrain}</td>
            <td>{surfaceWater}</td>
            <td>{population}</td>
            <td>{films}</td>
            <td>{created}</td>
            <td>{edited}</td>
            <td>{url}</td>
          </tr>
        );
      })}
    </table>
  );
}

export default Table;
