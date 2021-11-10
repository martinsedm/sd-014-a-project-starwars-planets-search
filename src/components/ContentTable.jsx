import React from 'react';
import Context from '../context/Context';

function TableContent() {
  const { render, objectTitle } = React.useContext(Context);

  return (
    <table>
      <tbody>
        {render.map((planet, index) => (
          <tr key={ index }>
            {objectTitle.map((key, i) => <td key={ i }>{planet[key]}</td>)}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default TableContent;
