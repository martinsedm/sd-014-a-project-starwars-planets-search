import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';

// Req. 3: Criação de um menu com diversas opções de filtro da tabela
function FilterTable() {
  const {
    data,
    setData,
    filter,
    setFilter,
    column,
    setColumn,
    comparison,
    setComparison,
    value,
    setValue,
  } = useContext(PlanetsContext);

  // Req. 3: função que executa o filtro
  const filterNumeric = () => {
    let dataFilterNumeric;

    if (comparison === 'maior que') {
      dataFilterNumeric = data
        .filter((planet) => Number(planet[column]) > Number((value)));
    } else if (comparison === 'menor que') {
      dataFilterNumeric = data
        .filter((planet) => Number(planet[column]) < Number((value)));
    } else if (comparison === 'igual a') {
      dataFilterNumeric = data
        .filter((planet) => Number(planet[column]) === Number((value)));
    }

    setData(dataFilterNumeric); // salva em data os valores com filtro
  };

  // função acionada ao clicar no botão filtrar
  // atualiza as variáveis column, value, comparison com os valores salvos no formulário
  const handleClick = async () => {
    setFilter({
      ...filter, // itens salvos em filter até o momento
      filterByNumericValues: [
        {
          column,
          value,
          comparison,
        },
      ],
    });
    await filterNumeric();
  };

  return (
    <div>
      <form>
        <select
          name="column"
          id="column"
          value={ column }
          // Chama a função e estrutura na mesma linha de onChange
          // Baseado na revisão feita pelo colega Thiago Sathler no dia 01/11/21
          onChange={ (element) => setColumn(element.target.value) } // Função salva opção selecionada na variável column
          data-testid="column-filter"
        >
          <option value="population">population</option>
          <option value="orbital_period">orbital_period</option>
          <option value="diameter">diameter</option>
          <option value="rotation_period">rotation_period</option>
          <option value="surface_water">surface_water</option>
        </select>
        <select
          name="comparison"
          id="comparison"
          value={ comparison }
          onChange={ (element) => setComparison(element.target.value) } // Função salva opção selecionada na variável comparison
          data-testid="comparison-filter"
        >
          <option value="menor que">menor que</option>
          <option value="maior que">maior que</option>
          <option value="igual a">igual a</option>
        </select>
        <label htmlFor="value">
          <input
            type="number"
            name="value"
            id="value"
            value={ value }
            onChange={ (element) => setValue(element.target.value) } // Função salva opção selecionada na variável value
            data-testid="value-filter"
          />
        </label>
        <button
          type="button"
          onClick={ handleClick }
          data-testid="button-filter"
        >
          Filtrar
        </button>
      </form>
    </div>
  );
}

export default FilterTable;
