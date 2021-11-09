import React, { useContext } from 'react';
import ContextPlanets from './ContextPlanets';

export default function Table() {
  const { planets, loading } = useContext(ContextPlanets);
  if (!planets) return null;
  if (loading) return <span>Loading...</span>;
  return (
    <div>
      <table>
        <thead>
          <tr>
            {
              Object.keys(planets[0])
                .map((planet, index) => <th key={ index }>{ planet }</th>)
            }
          </tr>
        </thead>
      </table>
    </div>
  );
}
