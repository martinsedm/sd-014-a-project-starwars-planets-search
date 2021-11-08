import React, { useContext } from 'react';
import AppContext from '../context/MyContext';

export const header = ['name',
  'rotation_period', 'orbital_period',
  'diameter', 'climate', 'gravity',
  'terrain',
  'surface_water',
  'population',
  'films',
  'created',
  'edited',
  'url'];

export default function Table() {
  const { data, loading, filterNames } = useContext(AppContext);

  return (
    loading
      ? (
        <div>
          <table border="1">
            <thead>
              <tr>
                {
                  header.map((key) => (
                    <th key={ key }>{key}</th>
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
