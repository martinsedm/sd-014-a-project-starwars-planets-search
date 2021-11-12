import React, { useContext, useState } from 'react';
import PlanetasContext from '../context/PlanetasContext';

function FilterValue() {
  const { filtrar, setFiltrar } = useContext(PlanetasContext);

  const [filtrarValoresNumericos, setFiltrarValoresNumericos] = useState({
    column: 'population',
    comparison: 'maior que',
    value: '',
  });

  const [filtrarOpcoes, setFiltrarOpcoes] = useState([
    'population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water',
  ]);

  const removerOpcoesFiltro = (colunaSelecionada) => {
    const novasOpcoes = [...filtrarOpcoes];
    novasOpcoes.splice(novasOpcoes.indexOf(colunaSelecionada), 1);
    setFiltrarOpcoes(novasOpcoes);
  };

  return (
    <div>
      <label htmlFor="filtrarColuna">
        <select
          name="filtrarColuna"
          id="filtrarColuna"
          data-testid="column-filter"
          onChange={ (event) => setFiltrarValoresNumericos({
            ...filtrarValoresNumericos,
            column: event.target.value,
          }) }
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
          onChange={ (event) => setFiltrarValoresNumericos({
            ...filtrarValoresNumericos,
            comparison: event.target.value,
          }) }
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
          onChange={ (event) => setFiltrarValoresNumericos({
            ...filtrarValoresNumericos,
            value: event.target.value,
          }) }
        />
      </label>
      <button
        type="button"
        data-testid="button-filter"
        onClick={ () => {
          setFiltrar({
            ...filtrar,
            filtrarValoresNumericos: [filtrarValoresNumericos],
          });
          removerOpcoesFiltro(filtrarValoresNumericos.column);
        } }
      >
        Filtrar
      </button>
    </div>
  );
}

export default FilterValue;
