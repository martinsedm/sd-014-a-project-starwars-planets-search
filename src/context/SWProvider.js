import React, { useState } from 'react';
import PropTypes from 'prop-types';
import SWContext from './SWContext';

function SWProvider({ children }) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState('');

  const fetchData = async () => {
    try {
      setIsLoading(true);
      const newData = await (await fetch('https://swapi-trybe.herokuapp.com/api/planets/')).json();
      setData(newData);
      setIsLoading(false);
      console.log('fetched!');
    } catch (error) {
      setErrorMsg(error);
      console.log(errorMsg);
    }
  };

  // const createNewQuestion = async (newQuestion) => {
  //   setIsLoading(true);
  //   await createQuestion(newQuestion);
  //   setQuestion([...question, newQuestion]);
  //   setIsLoading(false);
  // }
  return (
    <SWContext.Provider value={ { data, isLoading, fetchData } }>
      {children}
    </SWContext.Provider>
  );
}

SWProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SWProvider;
