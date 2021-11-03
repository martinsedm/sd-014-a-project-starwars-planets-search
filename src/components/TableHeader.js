import React, { useContext } from 'react';
import MyContext from '../context';

export default function TableHeader() {
  const { state: { results } } = useContext(MyContext);
  return (
    <tr>
      { Object.keys(results[0]).map((result) => (
        result !== 'residents' ? <th key={ result }>{result}</th> : null
      )) }
    </tr>
  );
}
