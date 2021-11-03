import React, { useState } from 'react';
import PropTypes from 'prop-types';
import filterContext from './filterContext';

function FilterProvider(props) {
  const [data, setData] = useState([]);
  const [filters, setFilters] = useState({
    filterByName: {
      name: '',
    },
    filterByNumericValues: [],
  });
  const { children } = props;
  const filtroEApi = { filters, setFilters, data, setData };
  return (
    <filterContext.Provider
      value={ filtroEApi }
    >
      {children}
    </filterContext.Provider>
  );
}

FilterProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default FilterProvider;
