import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function FilterByNumericValues() {
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
    options,
    setOptions,
  } = useContext(StarWarsContext);

  function ExcludeColumn() {
    // A função está comparando se o value selecionado pelo usuário em options é diferente do value de column
    // caso seja igual então esse item ficará de fora do array de options após o clique do botão fo form
    // o array de option é que alimenta o estado column, então a exclusão acontece no estado column
    const filterOptions = options.filter((option) => option !== column);
    setOptions(filterOptions);
  }

  function filterByNumericValues() {
    switch (comparison) {
    case 'maior que':
      setData(data.filter((planet) => Number(planet[column]) > Number((value))));
      break;
    case 'menor que':
      setData(data.filter((planet) => Number(planet[column]) < Number((value))));
      break;
    case 'igual a':
      setData(data.filter((planet) => Number(planet[column]) === Number((value))));
      break;

    default:
      break;
    }
  }

  function handleClick(event) {
    event.preventDefault();
    setFilter({
      ...filter,
      filterByNumericValues: [
        {
          column,
          value,
          comparison,
        },
      ],
    });

    filterByNumericValues();
    ExcludeColumn();
  }

  return (
    <div>
      <form>
        <select
          data-testid="column-filter"
          onChange={ (e) => setColumn(e.target.value) }
          value={ column }
        >
          { options.map((option) => (
            <option
              key={ option }
              value={ option }
            >
              { option }
            </option>
          ))}
        </select>

        <select
          data-testid="comparison-filter"
          onChange={ (e) => setComparison(e.target.value) }
          value={ comparison }
        >
          <option value="maior que">maior que</option>
          <option value="menor que">menor que</option>
          <option value="igual a">igual a</option>
        </select>

        <input
          type="number"
          data-testid="value-filter"
          value={ value }
          onChange={ (e) => setValue(e.target.value) }
        />
        <button
          type="submit"
          data-testid="button-filter"
          onClick={ handleClick }
        >
          Filtrar
        </button>
      </form>
    </div>
  );
}

export default FilterByNumericValues;
