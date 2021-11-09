import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import MyContext from '.';

function Provider({ children }) {
  const URL = 'https://swapi-trybe.herokuapp.com/api/planets/';
  const [state, setState] = useState([]);
  const [loading, setLoading] = useState(true);
  const [name, setName] = useState('');
  const [column, setColumn] = useState('population');
  const [comparison, setComparison] = useState('maior que');
  const [value, setValue] = useState(0);
  const [filterByNumericValues, setFilterByNumericValues] = useState([]);
  const [order, setOrder] = useState({
    column: 'name',
    sort: 'ASC',
  });
  const [result, setResult] = useState([]);

  const filterContext = {
    filters: {
      filterByName: {
        name,
        setName,
      },
      filterByNumericValues,
      numericValues:
        {
          column,
          comparison,
          value,
        },
      order,
      result,
      setOrder,
      setColumn,
      setComparison,
      setValue,
      setFilterByNumericValues,

    },
  };

  useEffect(() => {
    setLoading(true);
    const swPlanets = async () => {
      const response = await fetch(URL)
        .then((res) => res.json());
      setState(response);
      setResult(response);
      setLoading(false);
    };
    swPlanets();
  }, []);

  return (
    <MyContext.Provider value={ { state, loading, filterContext } }>
      {children}
    </MyContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
