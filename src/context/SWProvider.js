import React, { useContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import SWContext from './SWContext';
import getSWPlanets from '../services/swAPI';

/**
 * SWProvider - Provider for SWContext
 * @param {*} - the children components to be rendered
 * @returns {JSX.Element} - SWProvider
 * @example
 * <SWProvider>
 *  <SWContext.Consumer>
 * </SWProvider>
 */
const SWProvider = ({ children }) => {
  const [planets, setPlanets] = useState([]);

  useEffect(() => {
    const getPlanets = async () => setPlanets(await getSWPlanets());
    getPlanets();
  }, []);

  return (
    <SWContext.Provider value={ { planets, setPlanets } }>
      { children }
    </SWContext.Provider>
  );
};

export const usePlanets = () => {
  const { planets, setPlanets } = useContext(SWContext);
  return { planets, setPlanets };
};

SWProvider.propTypes = {
  children: PropTypes.node,
}.isRequised;

export default SWProvider;
