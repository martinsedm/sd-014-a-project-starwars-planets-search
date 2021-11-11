import React, { useContext } from 'react';
import StarwarsContext from '../context/StarwarsContext';
import ColunaPlanetas from '../pages/ColunaPlanetas';

function Filtro() {
  const { data,
    filters: { filterByName: { name },
      filterByNumericValues } } = useContext(StarwarsContext);
  const filtros = () => {
    if (name) {
      return data.filter((e) => e.name.includes(name));
    } if (filterByNumericValues) {
      return filterByNumericValues.reduce((acc, cc) => {
        const { comparison, column, value } = cc;
        if (comparison === 'maior que') {
          acc = data
            .filter((e) => Number(e[column]) > Number(value));
        }
        if (comparison === 'menor que') {
          acc = data
            .filter((e) => Number(e[column]) < Number(value));
        }
        if (comparison === 'igual a') {
          acc = data
            .filter((e) => Number(e[column]) === Number(value));
        }
        return acc;
      }, [data]);
    }
    return data;
  };

  return (<ColunaPlanetas data={ filtros() } />);
}

export default Filtro;
