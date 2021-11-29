import React, { useContext, useState, useEffect } from 'react';

import ContextApi from '../componentes/ContextApi';

function Header() {
  // td q vem do Provider - NÂO TROCA DE LUGAR
  const { filters, ChangeFiltersName, ChangeFiltersNumeric,
    RemoverFilterNumeric } = useContext(ContextApi);
  const { filterByNumericValues } = filters;

  // td q sera usado no botão - NÂO TROCA DE LUGAR
  const [disabledButton, setDisabledButton] = useState(true);
  const [optionsColumn, setOptionsColumn] = useState([
    'population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water',
  ]);

  // td para arquivar no filters.filterByNumericValues - NÂO TROCA DE LUGAR
  const [column, setColumn] = useState(optionsColumn[0]);
  const [comparsion, setComparsion] = useState('maior que');
  const [num, setNum] = useState();

  // td para remover opções do Column - NÂO TROCA DE LUGAR
  const [columnPraRemover, setColumnPraRemover] = useState();

  const buttonOnClick = () => {
    ChangeFiltersNumeric({ column, comparsion, value: num });
    setColumnPraRemover(column);
  };

  useEffect(() => {
    const NOVAS_OPTIONS = optionsColumn.filter((valor) => valor !== columnPraRemover);
    setOptionsColumn(NOVAS_OPTIONS);
    setColumn(NOVAS_OPTIONS[0]);
  // eslint-disable-next-line
  }, [columnPraRemover]);

  return (
    <header>
      <h1>StarWars Planets</h1>
      <label htmlFor="FilterName">
        Filtrar pelo nome:
        <input
          type="text"
          id="FilterName"
          data-testid="name-filter"
          value={ filters.filterByName.name }
          onChange={ ({ target: { value } }) => ChangeFiltersName(value) }
        />
      </label>

      <br />
      <br />

      <label htmlFor="filterColuna">
        Coluna Numerica:
        <select
          id="filterColuna"
          data-testid="column-filter"
          onChange={ ({ target: { value } }) => setColumn(value) }
        >
          {optionsColumn.map((op) => <option value={ op } key={ op }>{op}</option>)}
        </select>
      </label>

      <label htmlFor="Comparison">
        Comparação:
        <select
          id="Comparison"
          data-testid="comparison-filter"
          onChange={ ({ target: { value } }) => setComparsion(value) }
        >
          <option value="maior que">maior que</option>
          <option value="menor que">menor que</option>
          <option value="igual a">igual a</option>
        </select>
      </label>

      <label htmlFor="inputNumber">
        Valor:
        <input
          type="number"
          id="inputNumber"
          onChange={
            (({ target: { value } }) => {
              setNum(value);
              setDisabledButton(!value > 0);
            })
          }
          data-testid="value-filter"
        />
      </label>
      <button
        type="button"
        data-testid="button-filter"
        disabled={ disabledButton }
        onClick={ buttonOnClick }
      >
        Filtrar
      </button>
      {
        filterByNumericValues.map(({ column: clm, comparsion: cmp, value }) => (
          <div data-testid="filter" key={ clm }>
            <p>{`Column: ${clm} Comparsion: ${cmp} Value: ${value}`}</p>
            <button type="button" onClick={ () => RemoverFilterNumeric(clm) }>
              x
            </button>
          </div>
        ))
      }
      <br />
      <br />

    </header>
  );
}

export default Header;

// https://br.atsit.in/archives/11837
