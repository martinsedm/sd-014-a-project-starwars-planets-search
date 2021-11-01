import React, { useEffect, useState } from 'react';
import propTypes from 'prop-types';
import PlanetsContext from './PlanetsContext';

function PlanetsProvider({ children }) {
  const [column, setColumn] = useState('population');
  const [comparison, setComparison] = useState('maior que');
  const [value, setValue] = useState('');

  const [data, setData] = useState([]);
  const [newData, setNewData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [name, setName] = useState('');
  const [btnActive, setBtnActive] = useState(false);
  const [filters, setFilters] = useState({
    filterByName: { name: '' },
    filterByNumericValues: [{ column: '', comparison: '', value: '' }],
  });

  // Faz requisição e obtém o resultado atribuindo ele a data
  const getData = async () => {
    const END_POINT = 'https://swapi-trybe.herokuapp.com/api/planets/';
    const request = await fetch(END_POINT);
    const response = await request.json();
    setData(response.results);
    setNewData(response.results);
    setLoading(false);
  };

  // const filterFunction = (comp, col, val) => {
  //   switch (comp) {
  //   case 'maior que':
  //     return console.log(column, val);
  //   case 'menor que':
  //     return col < val;
  //   case 'igual a':
  //     return col === val;
  //   default:
  //     return console.log('def');
  //   }
  // };

  // Referẽncia ao código de César Meira - T14A
  // https://github.com/tryber/sd-014-a-project-starwars-planets-search/blob/cesar-meira-project-starwars/src/context/SWProvider.js
  useEffect(() => {
    setFilters({ ...filters, filterByName: name });
  }, [name]);

  useEffect(() => {
    // eslint-disable-next-line no-magic-numbers
    const number = Number(value);
    let filtered;
    if (comparison === 'maior que') {
      filtered = data.filter((planets) => Number(planets[column]) > number);
    } else if (comparison === 'igual a') {
      filtered = data.filter((planets) => Number(planets[column]) === number);
    } else if (comparison === 'menor que') {
      filtered = data.filter((planets) => Number(planets[column]) < number);
    }
    setNewData(filtered);
  }, [filters.filterByNumericValues]);

  return (
    <PlanetsContext.Provider
      value={ {
        getData,
        data,
        setName,
        name,
        setFilters,
        filters,
        setBtnActive,
        btnActive,
        loading,
        value,
        newData,
        setColumn,
        column,
        setComparison,
        comparison,
        setValue,
      } }
    >
      { children }
    </PlanetsContext.Provider>
  );
}

PlanetsProvider.propTypes = {
  children: propTypes.node.isRequired,
};

export default PlanetsProvider;
