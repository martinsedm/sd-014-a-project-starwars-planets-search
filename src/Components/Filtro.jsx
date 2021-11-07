import React, { useContext } from 'react';
import APIContext from '../Context/APIContext';
import Select from './Select';

function Filtro() {
  const {
    setNameFilter,
    setComparacao,
    setValor,
    setFiltrado,
    filtros,
    coluna,
    comparacao,
    valor,
    filtro,
    setFiltro,
    opcoes,
    setOpcoes } = useContext(APIContext);
  const { filterByName } = filtros.filters;

  const changeName = (e) => {
    setNameFilter(e.target.value);
  };

  const filterBtn = () => {
    setFiltrado(true);
    setFiltro([...filtro, { column: coluna, comparison: comparacao, value: valor }]);
    setOpcoes(opcoes.filter((cur) => cur !== coluna));
  };

  return (
    <>
      <input
        type="text"
        value={ filterByName.name }
        onChange={ changeName }
        data-testid="name-filter"
      />
      <Select />
      <select
        name="comparison"
        data-testid="comparison-filter"
        onChange={ (e) => setComparacao(e.target.value) }
      >
        <option value="maior que">maior que</option>
        <option value="menor que">menor que</option>
        <option value="igual a">igual a</option>
      </select>
      <input
        name="value"
        type="number"
        data-testid="value-filter"
        onChange={ (e) => setValor(e.target.value) }
      />
      <button
        type="submit"
        data-testid="button-filter"
        onClick={ () => filterBtn() }
      >
        Filtrar
      </button>
      {filtro.length > 0 && filtro.map((cur, i) => (
        <p key={ `filtro-${i}` }>{`${cur.column} ${cur.comparison} ${cur.value}`}</p>
      ))}
    </>
  );
}
Filtro.contextType = APIContext;
export default Filtro;
