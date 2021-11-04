import React, { useEffect, useContext } from 'react';
import StarwarsSearch from '../Context/StarwarsContext';
import { filterAll } from '../service/filters';
import Button from './generic/Button';

function TablePlanets() {
  const { filters, setFilters, planetsFiltred, planetsResponseApi,
    setPlanetsFiltred, columnsNumeric, setColumnsNumeric } = useContext(StarwarsSearch);
  const { filterByNumericValues } = filters;

  useEffect(() => {
    filterAll(setPlanetsFiltred, filters, planetsResponseApi);
  }, [filters, planetsResponseApi, setPlanetsFiltred]);

  const handleClickRemove = (filterForRemove) => {
    const newFiltersNumeric = filterByNumericValues
      .filter((filter) => filter.column !== filterForRemove);
    setFilters({
      ...filters,
      filterByNumericValues: newFiltersNumeric,
    });
    setColumnsNumeric([...columnsNumeric, filterForRemove]);
  };

  return (
    <main>
      {
        filters.filterByNumericValues.map((filter) => (
          <aside data-testid="filter" key={ filter.column }>
            <span>{`${filter.column} `}</span>
            <span>{`${filter.comparison} `}</span>
            <span>{`${filter.value} `}</span>
            <Button
              onClick={ () => handleClickRemove(filter.column) }
              text="X"
            />
          </aside>
        ))
      }
      <table>
        <tbody>
          <tr>
            {
              planetsFiltred.length > 0 && Object.keys(planetsFiltred[0]).map((item) => (
                <th key={ item }>
                  {item}
                </th>))
            }
          </tr>
          {
            planetsFiltred.length > 0
              && planetsFiltred.map((planet) => (
                <tr key={ planet.name }>
                  {Object.values(planet)
                    .map((valueColumn, index) => (
                      <td
                        data-testid={ index === 0 && 'planet-name' }
                        key={ valueColumn }
                      >
                        {valueColumn}
                      </td>))}
                </tr>
              ))
          }
        </tbody>
      </table>
    </main>
  );
}

export default TablePlanets;
