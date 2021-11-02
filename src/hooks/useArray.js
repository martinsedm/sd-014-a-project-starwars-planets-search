import { useState, useCallback } from 'react';

const useArray = (initial) => {
  const [array, setArray] = useState(initial);

  return [
    array,
    {
      add: useCallback((element) => setArray((prev) => [...prev, element]), []),
      remove: useCallback((element) => setArray(
        (prev) => prev.filter((el) => el !== element),
      ), []),
    },
  ];
};

export default useArray;
