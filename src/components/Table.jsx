import React, { useContext } from 'react';
import AppContext from '../context/AppContext';

const Table = () => {
  const { data, isLoading } = useContext(AppContext);
  const firstLine = [
    'Name', 'rotation period',
    'orbital period', 'diameter',
    'climate', 'gravity', 'terrain',
    'surface water', 'population',
    'films', 'created', 'edited', 'url'];

  return (
    <div>
      {isLoading ? (<div>Carregando</div>) : (
        <div>
          <table>
            <thead>
              <tr>
                {firstLine.map((coluna) => (
                  <th key={ coluna }>{coluna}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {data.map((planet) => (
                <tr key={ planet.name }>
                  <td>{planet.name}</td>
                  <td>{planet.rotation_period}</td>
                  <td>{planet.orbital_period}</td>
                  <td>{planet.diameter}</td>
                  <td>{planet.climate}</td>
                  <td>{planet.gravity}</td>
                  <td>{planet.terrain}</td>
                  <td>{planet.surface_water}</td>
                  <td>{planet.population}</td>
                  <td>{planet.films}</td>
                  <td>{planet.created}</td>
                  <td>{planet.edited}</td>
                  <td>{planet.url}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Table;
