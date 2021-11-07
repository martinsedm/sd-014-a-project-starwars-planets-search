import React from 'react';
import PropTypes from 'prop-types';
import PlanetsContext from './PlanetsContext';
import getPlanets from '../services/api';

class PlanetsProvider extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [],
      filters: {
        filterByName: {
          name: '',
        },
        filterByNumericValues: [],
      },
    };
    this.setPlanetsOnState = this.setPlanetsOnState.bind(this);
  }

  componentDidMount() {
    this.setPlanetsOnState();
  }

  // handleClick() {
  //   this.setState({
  //     teste: 'clicou!',
  //   });
  // }

  async setPlanetsOnState() {
    this.setState({
      data: await getPlanets(),
    });
  }

  render() {
    const { children } = this.props;
    return (
      <PlanetsContext.Provider value={ { ...this.state } }>
        {children}
      </PlanetsContext.Provider>
    );
  }
}

PlanetsProvider.propTypes = {
  children: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default PlanetsProvider;
