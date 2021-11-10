import React from 'react';
import Context from '../context/Context';

function TableHeader() {
  const { objectTitle } = React.useContext(Context);

  return (
    <table>
      <tbody>
        <tr>
          {objectTitle.map((key, index) => <th key={ index }>{key}</th>)}
        </tr>
      </tbody>
    </table>
  );
}

export default TableHeader;
