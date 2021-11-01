import React, { useContext } from 'react';
import myContext from '../context/myContext';

export default function Table() {
  const { data } = useContext(myContext);
  let titles = [];
  if (data) {
    const headersAll = Object.keys(data[0]);
    const headers = headersAll.filter((head) => head !== 'residents');
    titles = [...headers];
  } else {
    return null;
  }
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
            <tr key={ plnt }>
              {titles.map((title) => (
                <td key={ plnt[title] }>
                  {plnt[title]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
