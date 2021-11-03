import React, { Component } from 'react';
import starwarsApi from '../services/starwarsApi';
import MyContext from './MyContext';

export class Table extends Component {
  constructor(props) {
    super(props);

    this.dataApi = this.dataApi.bind(this);
    this.updateList = this.updateList.bind(this);

    this.state = {
      dataApi: [],
      isLoading: true,
      control: false,
    };
  }

  componentDidMount() {
    this.dataApi();
  }

  // componentDidUpdate() {
  //   this.dataApi();
  // }

  async dataApi() {
    const dataApi = await starwarsApi();
    this.setState({ dataApi, isLoading: false });
  }

  updateList(name, count, updateCount) {
    const { dataApi, control } = this.state;
    if (name.length > 0 && count < 1) {
      const filteredList = dataApi.filter((planet) => (planet.name.toLowerCase()
        .includes(name.toLowerCase())));
      this.setState({ dataApi: filteredList, control: true });
      updateCount();
    } else if (name.length === 0 && control) {
      this.dataApi();
      this.setState({ control: false });
    }
  }

  render() {
    const { dataApi, isLoading } = this.state;
    return (
      <div>
        {isLoading ? (<div>Carregando</div>) : (
          <div>
            <MyContext.Consumer>
              {({ contextValue: {
                filters:
                  { filterByName:
                    { name } },
                count,
                updateCount } }) => (this.updateList(name, count, updateCount))}
            </MyContext.Consumer>
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>rotation period</th>
                  <th>orbital_period</th>
                  <th>diameter</th>
                  <th>climate</th>
                  <th>gravity</th>
                  <th>terrain</th>
                  <th>surface_water</th>
                  <th>population</th>
                  <th>films</th>
                  <th>created</th>
                  <th>edited</th>
                  <th>url</th>
                </tr>
              </thead>
              <tbody>
                {dataApi.map((planet) => (
                  <tr key={ planet.name }>
                    <td>{planet.name}</td>
                    <td>{planet.rotation_period}</td>
                    <td>{planet.orbital_period}</td>
                    <td>{planet.diameter}</td>
                    <td>{planet.climate}</td>
                    <td>{planet.gravity}</td>
                    <td>{planet.terrain}</td>
                    <td>{planet.surface_water}</td>
                    <td>{planet.population}</td>
                    <td>{planet.films}</td>
                    <td>{planet.created}</td>
                    <td>{planet.edited}</td>
                    <td>{planet.url}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    );
  }
}

export default Table;
