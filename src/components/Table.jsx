import React, { useContext } from 'react';
import AppContext from '../context/MyContext';
import FormFiltre from './FormFiltre';

export default function Table() {
  const { data, loading, filterNames } = useContext(AppContext);

  return (
    loading
      ? (
        <div>
          <FormFiltre />
          <table border="1">
            <thead>
              <tr>
                {
                  Object.keys(data[0]).map((key) => (
                    <th key={ key }>{key.split('_').join('')}</th>
                  ))
                }
              </tr>
            </thead>
            <tbody>
              { filterNames(data).map((planets, i) => (
                <tr key={ i }>
                  {Object.values(planets).map((value) => <td key={ value }>{value}</td>)}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )
      : <span>Carregando...</span>
  );
}
