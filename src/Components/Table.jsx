import React, { useContext, useState } from 'react';
import myContext from '../MyContext/MyContext';
import '../styles/table.css';
import Loading from './Loading';
import labelSelectOpt, { labelSelectComp,
  tableInfos,
  selectFilter,
} from '../htmlFunctions/formFunc';

const NOME = 'name';

function Table() {
  const { planets, loading, filtros, setFiltros } = useContext(myContext);
  const [isClicked, setIsClicked] = useState(false);
  const [options, setOptions] = useState('population');
  const [comparison, setComparison] = useState('maior que');
  const [number, setNumber] = useState(0);
  const { filters } = filtros;
  const numeric = filtros.filters.filterByNumericValues;

  const handleTextFilter = (event) => {
    const { filters: { filterByNumericValues } } = filtros;
    const stateFilter = {
      filters: {
        filterByName: {
          [NOME]: event.target.value,
        },
        filterByNumericValues,
      },
    };
    setFiltros(stateFilter);
  };

  const handleOpt = (event) => {
    setOptions(event.target.value);
  };

  const handleComparison = (event) => {
    setComparison(event.target.value);
  };

  const handleNumber = (event) => {
    setNumber(event.target.value);
  };

  const handleClick = () => {
    const newFilter = {
      column: options,
      comparison,
      value: number,
    };

    numeric.push(newFilter);

    const columnSelect = document.getElementById('column');
    columnSelect.childNodes.forEach((child) => {
      if (child.value === options) { child.remove(); }
    });

    setIsClicked(true);
  };

  const nameFilter = () => {
    const nameFiltering = planets
      .filter((plt) => plt.name.includes(filters.filterByName[NOME]))
      .map((planeta, index) => (
        tableInfos(planeta, index)
      ));
    return nameFiltering;
  };

  return (
    loading ? <Loading /> : (
      <main>
        <input type="text" data-testid="name-filter" onChange={ handleTextFilter } />
        <form>
          {labelSelectOpt(handleOpt)}
          {labelSelectComp(handleComparison)}

          <input type="number" data-testid="value-filter" onChange={ handleNumber } />
          <button
            type="button"
            data-testid="button-filter"
            onClick={ handleClick }
          >
            Filtrar
          </button>
        </form>

        <table>
          <thead>
            <tr>
              { Object.keys(planets[0]).map((title, index) => {
                if (title === 'residents') { return null; }
                return (
                  <th key={ index } className="title">
                    {title}
                  </th>
                );
              }) }
            </tr>
          </thead>

          <tbody>

            { isClicked ? selectFilter(planets,
              comparison, options, number) : nameFilter() }

          </tbody>
        </table>
      </main>
    )
  );
}

export default Table;
