import React from 'react';
import PropTypes from 'prop-types';
import PlanetsContext from './PlanetsContext';
import getPlanets from '../services/api';

class PlanetsProvider extends React.Component {
  constructor() {
    super();
    this.state = {
      headers: [],
      unmodifiedData: [],
      data: [],
      filters: {
        filterByName: {
          name: '',
        },
        filterByNumericValues: [],
      },
    };
    this.setPlanetsOnState = this.setPlanetsOnState.bind(this);
    this.handleFilter = this.handleFilter.bind(this);
  }

  componentDidMount() {
    this.setPlanetsOnState();
  }

  componentDidUpdate(prevProps, prevState) {
    const { filters } = this.state;
    if (prevState.filters.filterByName.name.length !== filters.filterByName.name.length) {
      this.filterByNameFunction();
    }
  }

  handleFilter(name) {
    this.setState((prevState) => ({
      filters: { ...prevState.filters, filterByName: { name } },
    }));
  }

  async setPlanetsOnState() {
    const planets = await getPlanets();
    this.setState({
      data: planets,
      unmodifiedData: planets,
      headers: Object.keys(planets[0]),
    });
  }

  filterByNameFunction() {
    const { unmodifiedData, filters: { filterByName } } = this.state;
    const filteredPlanets = unmodifiedData.filter((planet) => (
      planet.name.includes((filterByName.name))));
    this.setState({
      data: filteredPlanets,
    });
  }

  render() {
    const { children } = this.props;
    return (
      <PlanetsContext.Provider
        value={
          { ...this.state, handleFilter: this.handleFilter }
        }
      >
        {children}
      </PlanetsContext.Provider>
    );
  }
}

PlanetsProvider.propTypes = {
  children: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default PlanetsProvider;
