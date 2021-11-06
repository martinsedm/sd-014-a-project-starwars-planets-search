import React, { useContext } from 'react';
import AppContext from '../context/AppContext';
import starwarsApi from '../services/starwarsApi';

const Header = () => {
  const {
    setFilters, filters, data, setData,
    listColumn, setListColumn } = useContext(AppContext);
  const { filterByNumericValues } = filters;

  async function filterNumericValues() {
    const { column, comparison, value } = filterByNumericValues[0];
    let dataFiltered = [];

    const newListColumn = listColumn.filter((item) => item !== column);
    setListColumn(newListColumn);

    if (comparison === 'maior que') {
      dataFiltered = data.filter((planet) => (
        parseInt(planet[column], 10) > parseInt(value, 10)));
    } else if (comparison === 'menor que') {
      dataFiltered = data.filter((planet) => (
        parseInt(planet[column], 10) < parseInt(value, 10)));
    } else if (comparison === 'igual a') {
      dataFiltered = data.filter((planet) => (
        parseInt(planet[column], 10) === parseInt(value, 10)));
    }
    setData(dataFiltered);
  }

  async function filterName(name) {
    if (name.length > 0) {
      const dataFiltered = data.filter((planet) => (
        planet.name.toLowerCase()).includes(name.toLowerCase()));
      setData(dataFiltered);
    } else if (name.length === 0) {
      const response = await starwarsApi();
      setData(response);
    }
  }

  function handleChange(event) {
    const { value } = event.target;
    setFilters({ filterByName: { name: value } });
    filterName(value);
  }

  function handleChangeNumeric({ target }) {
    const { column, comparison, value } = filterByNumericValues[0];
    switch (target.name) {
    case 'column':
      setFilters(
        {
          ...filters,
          filterByNumericValues: [{ column: target.value, comparison, value }],
        },
      );
      break;
    case 'comparison':
      setFilters(
        {
          ...filters,
          filterByNumericValues: [{ column, comparison: target.value, value }],
        },
      );
      break;
    case 'value':
      setFilters(
        {
          ...filters,
          filterByNumericValues: [{ column, comparison, value: target.value }],
        },
      );
      break;
    default:
      break;
    }
  }

  return (
    <div>
      <h1>Projeto Qual Planeta Vou Explodir Hoje</h1>
      <div>
        <div>
          Digite o nome do planeta:
          { ' ' }
          <input
            type="text"
            name="name"
            data-testid="name-filter"
            onChange={ (event) => handleChange(event) }
          />
        </div>
        <form>
          <select
            id="population"
            name="column"
            data-testid="column-filter"
            onChange={ (event) => handleChangeNumeric(event) }
          >
            {listColumn.map((item) => (
              <option key={ item } value={ item }>{item}</option>
            ))}
          </select>
          { ' ' }
          <select
            id="comparison"
            name="comparison"
            data-testid="comparison-filter"
            onChange={ (event) => handleChangeNumeric(event) }
          >
            <option value="maior que">maior que</option>
            <option value="menor que">menor que</option>
            <option value="igual a">igual a</option>
          </select>
          { ' ' }
          <input
            type="number"
            name="value"
            data-testid="value-filter"
            onChange={ (event) => handleChangeNumeric(event) }
          />
          { ' ' }
          <button
            type="button"
            data-testid="button-filter"
            onClick={ () => filterNumericValues() }
          >
            Filtrar
          </button>
        </form>
      </div>
    </div>
  );
};

export default Header;
