import React, { useContext } from 'react';
import { Table as TableBootStrap } from 'react-bootstrap/Table';

function Table() {
  const { planetsRender } = useContext();
  return (
    <TableBootStrap striped bordered hover>
      <thead>
        <tr>
          <th>Name</th>
          <th>Rotation Period</th>
          <th>Orbital Period</th>
          <th>Diameter</th>
          <th>Climate</th>
          <th>Gravity</th>
          <th>Terrain</th>
          <th>Suface Water</th>
          <th>Population</th>
          <th>Films</th>
        </tr>
      </thead>
      <tbody>
        { planetsRender.map(({ planet }) => {
          const {
            name,
            rotation_period: rotation,
            orbital_period: period,
            diameter,
            climate,
            gravity,
            terrain,
            surface_water: water,
            population,
            films,
          } = planet;
          return (
            <tr key={ name }>
              <td>{ name }</td>
              <td>{ rotation }</td>
              <td>{ period }</td>
              <td>{ diameter }</td>
              <td>{ climate }</td>
              <td>{ gravity }</td>
              <td>{ terrain }</td>
              <td>{ water }</td>
              <td>{ population }</td>
              <td>
                { films.map((film) => (
                  <p key={ film }>{ film }</p>
                )) }

              </td>
            </tr>
          );
        })}

      </tbody>
    </TableBootStrap>
  );
}

export default Table;
