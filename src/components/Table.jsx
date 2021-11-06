import React, { useContext } from 'react';
import Allcontext from '../context/context';

const tableGeneret = (obj) => (
  <tr key={ obj.name }>
    {
      Object.keys(obj).map((Key, i) => (
        <td key={ i }>{obj[Key]}</td>
      ))
    }
  </tr>
);

const thead = (arr) => {
  if (typeof arr[0] === 'object') {
    const chaves = Object.keys(arr[0]);
    return (
      chaves.map((item, i) => <th key={ i }>{ item }</th>)
    );
  }
};

function Table() {
  const { data } = useContext(Allcontext);
  return (
    <table>
      <thead>
        <tr>
          {
            thead(data)
          }
        </tr>
      </thead>
      <tbody>
        {
          data.map((item) => (
            tableGeneret(item)
          ))
        }
      </tbody>

    </table>
  );
}

export default Table;
