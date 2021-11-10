import React from 'react';
import PropTypes from 'prop-types';

function ColunaPlanetas({ data }) {
  return (
    <tbody>
      {data.map((info) => (
        <tr key={ info.diameter }>
          <td>
            {info.name}
          </td>
          <td>
            {info.rotation_period}
          </td>
          <td>
            {info.orbital_period}
          </td>
          <td>
            {info.diameter}
          </td>
          <td>
            {info.climate}
          </td>
          <td>
            {info.gravity}
          </td>
          <td>
            {info.terrain}
          </td>
          <td>
            {info.surface_water}
          </td>
          <td>
            {info.population}
          </td>
          <td>
            {info.films}
          </td>
          <td>
            {info.created}
          </td>
          <td>
            {info.edited}
          </td>
          <td>
            {info.url}
          </td>
        </tr>
      ))}
    </tbody>
  );
}

ColunaPlanetas.propTypes = {
  data: PropTypes.func,
  map: PropTypes.oneOfType([
    PropTypes.string,
  ]),
}.isRequired;

export default ColunaPlanetas;
