import React, { useContext } from 'react';
import Table from 'react-bootstrap/Table';
import StarsWarsContext from '../contexts/StarWarsContext';

function TableRender() {
  const { planetsRender } = useContext(StarsWarsContext);
  return (
    <Table striped bordered hover>
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
          <th>Created</th>
          <th>Edited</th>
          <th>URL</th>
        </tr>
      </thead>
      <tbody>
        { planetsRender.map((planet) => {
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
            created,
            edited,
            url,
          } = planet;
          return (
            <tr key={ name }>
              <td data-testid="planet-name">{ name }</td>
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
              <td>{ created }</td>
              <td>{ edited }</td>
              <td>{ url }</td>
            </tr>
          );
        })}

      </tbody>
    </Table>
  );
}

export default TableRender;
