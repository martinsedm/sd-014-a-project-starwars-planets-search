import React, { useContext, useState } from 'react';
import PlanetasContext from '../context/PlanetasContext';
import RemoverFilter from './RemoverFilter';

function FilterValue() {
  const {
    filtrar,
    setFiltrar,
    planetasFiltrados,
    column,
    setColumn,
    comparison,
    setComparison,
    value,
    setValue,
  } = useContext(PlanetasContext);

  const [filtrarOpcoes, setFiltrarOpcoes] = useState([
    'population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water',
  ]);

  const removerOpcoesFiltro = (colunaSelecionada) => {
    const novasOpcoes = [...filtrarOpcoes];
    novasOpcoes.splice(novasOpcoes.indexOf(colunaSelecionada), 1);
    setFiltrarOpcoes(novasOpcoes);
  };

  const handleClick = () => {
    setFiltrar({
      ...filtrar,
      filtrarValoresNumericos: [
        ...filtrar.filtrarValoresNumericos, {
          column, comparison, value,
        },
      ],
    });
    planetasFiltrados();
    removerOpcoesFiltro(column);
  };

  return (
    <div>
      <label htmlFor="filtrarColuna">
        <select
          name="filtrarColuna"
          id="filtrarColuna"
          data-testid="column-filter"
          onChange={ (event) => setColumn(event.target.value) }
        >
          { filtrarOpcoes
            .map((item) => <option value={ item } key={ item }>{ item }</option>) }
        </select>
      </label>
      <label htmlFor="filtrarComparacao">
        <select
          name="filtrarComparacao"
          id="filtrarComparacao"
          data-testid="comparison-filter"
          onChange={ (event) => setComparison(event.target.value) }
        >
          <option value="maior que">maior que</option>
          <option value="menor que">menor que</option>
          <option value="igual a">igual a</option>
        </select>
      </label>
      <label htmlFor="filtrarValor">
        <input
          id="filtrarvalor"
          data-testid="value-filter"
          type="number"
          onChange={ (event) => setValue(event.target.value) }
        />
      </label>
      <button
        type="button"
        data-testid="button-filter"
        onClick={ handleClick }
      >
        Filtrar
      </button>
      <RemoverFilter />
    </div>
  );
}

export default FilterValue;
