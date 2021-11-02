import React from 'react';

import { tableHeaders } from '../data';

export default function TableHeaders() {
  return (
    <thead>
      <tr>
        {tableHeaders.map((header, index) => <th key={ index } scope="col">{header}</th>)}
      </tr>

    </thead>

  );
}
