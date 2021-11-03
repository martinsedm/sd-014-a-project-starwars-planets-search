import React from 'react';
import PropTypes from 'prop-types';
import APIContext from './APIContext';

class APIProvider extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [],
      dataFiltrado: [],
      filters: {
        filterByName: {
          name: '',
        },
      },
    };
    this.renderApi = this.renderApi.bind(this);
    this.filtros = this.filtros.bind(this);
  }

  componentDidMount() {
    this.renderApi();
  }

  filtros(event) {
    const { data, filters: { filterByName: { name } } } = this.state;
    this.setState({ filters: { filterByName: { name: event.target.value } } });
    const filtrados = data.filter((atual) => atual.name.includes(name));
    this.setState({ dataFiltrado: filtrados });
    console.log(name);
    console.log(filtrados);
  }

  async renderApi() {
    const response = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
    const result = await response.json();
    this.setState({ data: result.results });
  }

  render() {
    const { children } = this.props;
    // const { data, timer } = this.state;
    return (
      <APIContext.Provider value={ { ...this.state, filtro: this.filtros } }>
        {children}
      </APIContext.Provider>
    );
  }
}
APIProvider.propTypes = {
  children: PropTypes.objectOf.isRequired,
};
export default APIProvider;
