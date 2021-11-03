import React from 'react';
import { connect } from 'react-redux';
import { savePlanets } from '../actions';
import planetsAPI from '../Services/planetsAPI';

class Home extends React.Component {
  constructor() {
    super();

    this.handleClick = this.handleClick.bind(this);
    this.fetchPlanets = this.fetchPlanets.bind(this);
  }

  async handleClick() {
    await this.fetchPlanets();
    const { history } = this.props;
    history.push('/table');
  }

  async fetchPlanets() {
    const { savePlanetsRedux } = this.props;
    const apiData = await planetsAPI();
    savePlanetsRedux(apiData);
  }

  render() {
    return (
      <div>
        <h1>Welcome Traveler!</h1>
        <button type="button" onClick={ this.handleClick }>Comece sua jornada</button>
      </div>

    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  savePlanetsRedux: (planets) => dispatch(savePlanets(planets)),
});

export default connect(null, mapDispatchToProps)(Home);

// export default Home;
