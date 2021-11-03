import React from 'react';
import PropTypes from 'prop-types';

function Table({ data }) {
  //  console.log(data);

  return (
    <table>
      <tbody>
        <tr>
          <th>Name</th>
          <th>Rotation Period</th>
          <th>Orbital Period</th>
          <th>Diameter</th>
          <th>Climate</th>
          <th>Gravity</th>
          <th>Terrain</th>
          <th>Surface Water</th>
          <th>Population</th>
          <th>Films</th>
          <th>Created</th>
          <th>Edited</th>
          <th>URL</th>
        </tr>
        { data.map((planet) => {
          const { name, rotation_period: rotationPeriod } = planet;
          const { orbital_period: orbitalPeriod, diameter, climate } = planet;
          const { gravity, terrain, surface_water: surfaceWater } = planet;
          const { population, films, created, edited, url } = planet;
          return (
            <tr key={ url }>
              <td>{ name }</td>
              <td>{ rotationPeriod }</td>
              <td>{ orbitalPeriod }</td>
              <td>{ diameter }</td>
              <td>{ climate }</td>
              <td>{ gravity }</td>
              <td>{ terrain }</td>
              <td>{ surfaceWater }</td>
              <td>{ population }</td>
              <td>{ films }</td>
              <td>{ created }</td>
              <td>{ edited }</td>
              <td>{ url }</td>
            </tr>
          );
        }) }
      </tbody>
    </table>
  );
}

Table.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Table;
