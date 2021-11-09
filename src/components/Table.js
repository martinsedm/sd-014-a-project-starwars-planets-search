import React, { useContext, useEffect, useState } from 'react';
import StarWarsContext from '../context/StarWarsContext';
import { TYPEFILTER, COMPARE, TABLEHEADERS } from '../data/data';

export default function Table() {
  const { data, name, filters, setFilters } = useContext(StarWarsContext);

  const [trigger, setTrigger] = useState(false);
  const [filterPlanetName, setFilterPlanetName] = useState([]);
  const [typeOfFilters, setTypeOfFilters] = useState(TYPEFILTER);
  const [tableForm, setTableForm] = useState(
    { column: '', comparison: '', value: 0 },
  );

  const handleTableForm = ({ target }) => {
    const { name: nameTable, value } = target;
    setTableForm({ ...tableForm, [nameTable]: value });
  };

  const filterPlanet = () => {
    const lowerName = name.toLowerCase();
    const filteredPlanet = data
      .filter((planet) => planet.name.toLowerCase().includes(lowerName));
    setFilterPlanetName(filteredPlanet);
  };

  const filterNumericValue = (coluna, compara, numero) => {
    switch (compara) {
    case 'maior que':
      return setFilterPlanetName(filterPlanetName
        .filter((planet) => Number(planet[coluna]) > Number(numero)));
    case 'menor que':
      return setFilterPlanetName(filterPlanetName
        .filter((planet) => Number(planet[coluna]) < Number(numero)));
    case 'igual a':
      return setFilterPlanetName(filterPlanetName
        .filter((planet) => Number(planet[coluna]) === Number(numero)));
    default:
      return setFilterPlanetName(filterPlanetName);
    }
  };

  const removeColumnAndAttFilters = (coluna, compara, numero) => {
    filterNumericValue(coluna, compara, numero);
    setFilters({ ...filters,
      filterByNumericValues: [...filters.filterByNumericValues, tableForm] });
    return typeOfFilters.includes(coluna)
      ? setTypeOfFilters(typeOfFilters.filter((type) => type !== coluna)) : typeOfFilters;
  };

  const removeFilter = (column) => {
    setTypeOfFilters([column, ...typeOfFilters]);
    const filterWithoutColumn = filters.filterByNumericValues
      .filter((item) => item.column !== column);

    setFilters({ ...filters,
      filterByNumericValues: [...filterWithoutColumn] });

    return trigger ? setTrigger(false) : setTrigger(true);
  };

  const testeFilter05 = () => {
    setFilterPlanetName(data);
    if (filters.filterByNumericValues.length > 0) {
      filters.filterByNumericValues
        .forEach((item) => filterNumericValue(item.column, item.comparison, item.value));
    }
  };

  useEffect(filterPlanet, [data, name]);
  useEffect(testeFilter05, [trigger]);

  return (
    <>
      <div>
        <select
          data-testid="column-filter"
          onChange={ ({ target }) => handleTableForm({ target }) }
          value={ tableForm.column }
          name="column"
        >
          {typeOfFilters.map((types) => (
            <option key={ types }>{types}</option>
          ))}
        </select>
        <select
          data-testid="comparison-filter"
          onChange={ ({ target }) => handleTableForm({ target }) }
          value={ tableForm.comparison }
          name="comparison"
        >
          {COMPARE.map((comparison) => (
            <option key={ comparison }>{comparison}</option>
          ))}
        </select>
        <input
          type="number"
          name="value"
          value={ tableForm.value }
          data-testid="value-filter"
          onChange={ ({ target }) => handleTableForm({ target }) }
        />
        <button
          type="button"
          data-testid="button-filter"
          value="Filtrar"
          onClick={ () => removeColumnAndAttFilters(tableForm.column,
            tableForm.comparison, tableForm.value) }
        >
          Filtrar
        </button>
      </div>
      {filters.filterByNumericValues.length > 0 && (
        filters.filterByNumericValues.map(({ column, comparison, value }, index) => (
          <div key={ index } data-testid="filter">
            <span>{`${column} ${comparison} ${value} `}</span>
            <button
              type="button"
              onClick={ () => removeFilter(column) }
            >
              X
            </button>
          </div>
        ))
      )}
      <table>
        <thead>
          <tr>
            {TABLEHEADERS.map((head) => (
              <th key={ head }>{ head }</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {filterPlanetName.map((planet) => (
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
              <td>
                <ul>
                  {planet.films.map((movie) => (
                    <li key={ movie }>{movie}</li>
                  ))}
                </ul>

              </td>
              <td>{planet.created}</td>
              <td>{planet.edited}</td>
              <td>{planet.url}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
