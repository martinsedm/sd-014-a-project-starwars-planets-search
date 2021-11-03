import React from 'react';
import PropTypes from 'prop-types';
import APIContext from './APIContext';

class APIProvider extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [],
    };
    this.renderApi = this.renderApi.bind(this);
  }

  componentDidMount() {
    this.renderApi();
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
      <APIContext.Provider value={ { ...this.state } }>
        {children}
      </APIContext.Provider>
    );
  }
}
APIProvider.propTypes = {
  children: PropTypes.objectOf.isRequired,
};
export default APIProvider;
