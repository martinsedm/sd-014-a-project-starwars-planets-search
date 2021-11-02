import React, { useContext } from 'react';
import myContext from '../context/myContext';

export default function Table() {
  const { data } = useContext(myContext);
  const titles = ['name', 'rotation_period', 'orbital_period',
    'diameter', 'climate',
    'gravity', 'terrain', 'surface_water', 'population', 'films',
    'created', 'edited', 'url'];
  return (
    <div>
      <table>
        <tbody>
          <tr>
            {titles.map((title) => (
              <th key={ title }>
                {title}
              </th>
            ))}
          </tr>
          { data.map((plnt) => (
            <tr key={ plnt.id }>
              {titles.map((title, idx) => {
                if (idx === 0) {
                  return (
                    <td key={ plnt[title] } data-testid="planet-name">
                      {plnt[title]}
                    </td>
                  );
                }
                return (
                  <td key={ plnt[title] }>
                    {plnt[title]}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
