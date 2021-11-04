import React, { useContext } from 'react';
import AppContext from '../context/MyContext';

export default function Table() {
  const { data, loading } = useContext(AppContext);

  return (
    loading
      ? (
        <div>
          <table border="1">
            <thead>
              <tr>
                {
                  Object.keys(data.results[0]).map((key) => (
                    <th key={ key }>{key.split('_').join('')}</th>
                  ))
                }
              </tr>
            </thead>
            <tbody>
              { data.results.map((planets) => (
                <tr key={ planets.name }>
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
