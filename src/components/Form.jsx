import React, { useEffect, useContext } from 'react';
import TableContext from '../services/contextPages';

function Form() {
  const {
    setFilters,
    dataTest,
    filters: { filterByName: {
      name,
    },
    filterByNumericValues: [
      {
        column,
        comparison,
        value,
      },
    ] },
    setFilterPlanets,
    filters,
    filterPlanets,
  } = useContext(TableContext);

  useEffect(() => {
    function filteredName() {
      const filterResu = dataTest.filter((planets) => planets.name.toLowerCase()
        .includes(name.toLowerCase()));
      setFilterPlanets(filterResu);
    }
    filteredName();
  }, [name, dataTest, setFilterPlanets]);

  const handleChange = ({ target }) => {
    const objectfilter = {
      ...filters,
      filterByName: { name: target.value },
    };

    setFilters(objectfilter);
  };

  const handleOptions = ({ target }, nomOp) => {
    const compare = () => {
      switch (nomOp) {
      case 'column':
        return target.value;

      case 'comparison':
        return target.value;
      case 'value':
        return target.value;
      default:
        return (Object.values(filters)[1][0]);
      }
    };
    const objectSelect = {
      ...filters,
      filterByNumericValues: [
        {
          ...(Object.values(filters)[1][0]), [nomOp]: compare(),
        },
      ],
    };
    setFilters(objectSelect);
  };

  const handleClick = () => {
    const separ = [...filterPlanets];
    const filterSelect = () => {
      switch (comparison) {
      case 'menor que':
        return separ.filter((dados) => dados[column] < Number(value));
      case 'maior que':
        return separ.filter((dados) => dados[column] > Number(value));
      case 'igual a':
        return separ.filter((dados) => Number(dados[column]) === Number(value));
      default:
        return separ;
      }
    };
    const novo = filterSelect();
    setFilterPlanets(novo);
  };

  const columnOption = ['population',
    'orbital_period', 'diameter', 'rotation_period', 'surface_water'];
  const comparisonOption = ['maior que', 'menor que', 'igual a'];
  return (
    <div>
      <label htmlFor="name-filter">
        {' '}
        Filtrar por nome:
        <input
          type="text"
          data-testid="name-filter"
          value={ name }
          id="name"
          onChange={ handleChange }
        />
      </label>
      <select
        data-testid="column-filter"
        value={ column }
        onChange={ (event) => (handleOptions(event, 'column')) }
      >
        {columnOption.map((option) => (
          <option key={ option }>
            {option}
          </option>))}
      </select>
      <select
        data-testid="comparison-filter"
        value={ comparison }
        onChange={ (event) => (handleOptions(event, 'comparison')) }
      >
        {comparisonOption.map((options) => (
          <option key={ options }>
            {options}
          </option>))}
      </select>
      <input
        type="number"
        value={ value }
        name="value"
        data-testid="value-filter"
        onChange={ (event) => (handleOptions(event, 'value')) }
      />
      <button
        type="button"
        data-testid="button-filter"
        onClick={ handleClick }
      >
        Filtrar

      </button>
    </div>
  );
}

export default Form;
