import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import ContextStar from './ContextStar';
import requisitionPlanets from '../services/api';

function ProviderStar({ children }) {
  // salvar as as informações que foram resgatadas da API.
  const [planets, setPlanets] = useState([]);
  // reescreve o (planets) com base dos fltros, ou seja, as novas informações da API filtradas.
  const [filterData, setFilterData] = useState([]);
  // guarda os filtros que serão utilizados.
  const [filters, setFilters] = useState(
    { filterByName: { name: '' }, filterByNumericValues: [] },
  );
  // estados do meu select.
  const [filterSelect, setFilterSelect] = useState('population');
  // estado do select
  const [filterComparation, setFilterComparation] = useState('maior que');
  // estado do select
  const [filterInput, setFilterInput] = useState('10000');
  // const [filterObject, setFilterObject] = useState([]);

  useEffect(() => {
    const { filterByName: { name } } = filters;
    let resultFilterNames = [...planets];
    if (name !== '') {
      resultFilterNames = resultFilterNames
        .filter((planet) => (
          (planet.name.toLowerCase()).includes(name.toLowerCase())
        ));
    }

    const { filterByNumericValues } = filters;
    console.log('aa', filterByNumericValues);
    filterByNumericValues.forEach((filter) => {
      // comparação númerica entre chaves e valores.
      if (filter.comparison === 'maior que') {
        resultFilterNames = resultFilterNames.filter(
          (planet) => +planet[filter.column] > +filter.value,
        );
      }

      if (filter.comparison === 'menor que') {
        resultFilterNames = resultFilterNames.filter(
          (planet) => +planet[filter.column] < +filter.value,
        );
      }

      if (filter.comparison === 'igual a') {
        resultFilterNames = resultFilterNames.filter(
          (planet) => +planet[filter.column] === +filter.value,
        );
      }
    });

    setFilterData(resultFilterNames);
  }, [filters, planets]);
  console.log('fil', filters);

  async function InfoPlanetsAPI() {
    const saveInfos = await requisitionPlanets();
    setPlanets(saveInfos);
  }

  function handleClickInput({ target }) {
    setFilterInput(target.value);
  }

  function handleClickSelect({ target }) {
    setFilterSelect(target.value);
  }

  function handleClickComparison({ target }) {
    setFilterComparation(target.value);
  }

  function handleButton() {
    // const { filterByNumericValues } = filters;
    // quero que o valor final dos valores do meu input sejam enviados para o array ao clique do botão.
    const newFilters = {
      ...filters,
      filterByNumericValues: [
        {
          column: filterSelect,
          comparison: filterComparation,
          value: filterInput,
        },
      ],
    };
    // o novo filter serve para substituir o filter anterior. Sendo o valor oq for depositado dentro do input.
    // acessar os valores do input
    setFilters(newFilters);
    // jogar dentro do array
  }
  //
  // próximo passo ao jogar as informações pro array. Filtrar (já feito).

  return (
    <ContextStar.Provider
      value={ { InfoPlanetsAPI,
        planets,
        setFilters,
        filters,
        filterData,
        handleClickSelect,
        handleClickComparison,
        handleClickInput,
        filterSelect,
        setFilterSelect,
        filterComparation,
        setFilterComparation,
        filterInput,
        setFilterInput,
        handleButton } }
    >
      { children }
    </ContextStar.Provider>
  );
}

ProviderStar.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ProviderStar;
