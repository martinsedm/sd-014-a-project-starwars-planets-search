import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';

const Search = () => {
  const {
    setName,
    name,
    value,
    comparasion,
    column,
    setColumn,
    setComparasion,
    setValue,
    setFilter,
    columnCategories,
    setColumnCategories,
    filter } = useContext(PlanetsContext);

  const handleClick = () => {
    setFilter({
      ...filter,
      filterByNumericValues: [
        ...filter.filterByNumericValues,
        { column, value, comparasion },
      ],
    });

    const filteredCategory = columnCategories.filter((category) => category !== column);
    setColumnCategories(filteredCategory);
  };

  return (
    <div>
      <div>
        <input
          placeholder="Procurar pelo nome"
          data-testid="name-filter"
          type="text"
          value={ name }
          onChange={ (e) => setName(e.target.value) }
        />
      </div>
      <select
        data-testid="column-filter"
        name="column"
        id="column"
        value={ column }
        onChange={ (e) => setColumn(e.target.value) }
      >
        { columnCategories.map((category) => (
          <option key={ category } value={ category }>{ category }</option>
        )) }
      </select>
      <select
        data-testid="comparison-filter"
        name="comparison"
        id="comparison"
        value={ comparasion }
        onChange={ (e) => setComparasion(e.target.value) }
      >
        <option value="maior que">maior que</option>
        <option value="menor que">menor que</option>
        <option value="igual a">igual a</option>
      </select>
      <input
        data-testid="value-filter"
        type="number"
        name="value"
        id="value"
        value={ value }
        onChange={ (e) => setValue(e.target.value) }
      />
      <button
        data-testid="button-filter"
        type="button"
        onClick={ handleClick }
      >
        Filtrar
      </button>
    </div>
  );
};

export default Search;
