import React, { useContext, useEffect, useState } from 'react';
import PlanetsContext from '../ContextAPI/PlanetsContext';

function NumberFilter() {
  const [stateNumberFilter, setStateNumberFilter] = useState([{
    column: '',
    comparison: '',
    value: '',
  }]);
  const [optionColumn, setOptionColumn] = useState([
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ]);
  const [click, setClick] = useState(false);

  const { data, setFiltrado, filtrado, setFilter, filter } = useContext(PlanetsContext);
  const { filters: { filterByNumericValues } } = filter;

  const handleChange = ({ target: { name, value } }) => {
    setStateNumberFilter([{
      ...stateNumberFilter[0],
      [name]: value,
    }]);
  };

  const RemoveOption = () => {
    const filtroEscolhido = optionColumn
      .find((item) => item === stateNumberFilter[0].column);
    optionColumn.splice(optionColumn.indexOf(filtroEscolhido), 1);
    setOptionColumn(optionColumn);
    return optionColumn;
  };

  useEffect(() => {
    const filtroSelect = (filtrado.length < 1) ? [...data] : [...filtrado];

    filterByNumericValues.forEach((item) => {
      const { column, comparison, value } = item;
      console.log(item);
      const filtradoSelect = filtroSelect.filter((planets) => {
        switch (comparison) {
        case 'maior que':
          return (Number(planets[column]) > Number(value));
        case 'menor que':
          return (Number(planets[column]) < Number(value));
        case 'igual a':
          return (Number(planets[column]) === Number(value));
        default:
          return [];
        }
      });
      setFiltrado(filtradoSelect);
    });
  }, [filterByNumericValues, click]);

  const handleClick = () => {
    setFilter({
      ...filter,
      filters: {
        ...filter.filters,
        filterByNumericValues: [
          ...filter.filters.filterByNumericValues,
          ...stateNumberFilter,
        ],
      },
    });
    RemoveOption();
  };

  const removeFiltroX = (index, column) => {
    filterByNumericValues.splice(index, 1);
    setOptionColumn([...optionColumn, column]);
    setFiltrado(data);
    setClick(!click);
  };

  const criandoFiltros = () => filterByNumericValues
    .map(({ column, comparison, value }, index) => (
      <div key={ index } data-testid="filter" className="text-white">
        <span>{`${column} | ${comparison} | ${value}`}</span>
        <button
          type="button"
          className="btn btn-primary"
          onClick={ () => removeFiltroX(index, column) }
        >
          X
        </button>
      </div>
    ));

  return (
    <div className="container row">
      <div className="col">
        <select
          data-testid="column-filter"
          name="column"
          onChange={ handleChange }
          className="form-select form-control"
        >
          {
            optionColumn
              .map((item, index) => (
                <option
                  key={ index }
                  value={ item }
                >
                  { item }
                </option>))
          }
        </select>
      </div>
      <div className="col">
        <select
          data-testid="comparison-filter"
          name="comparison"
          onChange={ handleChange }
          className="form-select form-control"
        >
          <option selected value="maior que">maior que</option>
          <option vau="menor que">menor que</option>
          <option value="igual a">igual a</option>
        </select>
      </div>
      <div className="col">
        <label htmlFor="value" onChange={ handleChange }>
          <input
            type="number"
            data-testid="value-filter"
            id="value"
            name="value"
            className="form-control"
          />
        </label>
      </div>
      <div className="col">
        <button
          type="button"
          data-testid="button-filter"
          onClick={ handleClick }
          className="btn btn-primary"
        >
          Filtrar
        </button>
      </div>
      { filterByNumericValues ? criandoFiltros() : null }
    </div>
  );
}

export default NumberFilter;
