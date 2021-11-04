import PropTypes from 'prop-types';
import React, { useState } from 'react';
import PlanetsSearchContext from './PlanetsSearchContext';

const initialState = {
  filters:
    {
      filterByName: {
        name: '',
      },
      filterByNumericValues: [
        {
          column: '',
          comparison: '',
          value: '',
        },
      ],
    },
};

function PlanetsSearchProvider({ children }) {
  const [filterOptions, setFilterOptions] = useState(initialState);
  const [planets, setPlanets] = useState([]);
  const [filteredPlanets, setFilteredPlanets] = useState([]);

  return (
    <PlanetsSearchContext.Provider
      value={ {
        planets,
        setPlanets,
        filterOptions,
        setFilterOptions,
        filteredPlanets,
        setFilteredPlanets,
      } }
    >
      { children }
    </PlanetsSearchContext.Provider>
  );
}

PlanetsSearchProvider.propTypes = {
  children: PropTypes.arrayOf.isRequired,
};

export default PlanetsSearchProvider;
