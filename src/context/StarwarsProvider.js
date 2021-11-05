import PropTypes from 'prop-types';
import React from 'react';
import StarwarsContext from './StarwarsContext';
import fetchStarwarsAPI from '../services/StarwarsAPI';

class StarwarsProvider extends React.Component {
  constructor() {
    super();

    this.state = {
      data: [],
      keys: [],
      values: [],
      isFetching: false,
      filters: {},
    };
    this.getAPI = this.getAPI.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.getAPI();
  }

  handleChange(e) {
    const { rawData } = this.state;
    if (e.target.value !== undefined) {
      this.setState({ filters: { filterByName: { name: e.target.value } } });
      const filtered = rawData.filter((element) => (
        element.name.includes(e.target.value)));
      this.setState({ data: filtered });
    }
  }

  getAPI() {
    this.setState({ isFetching: true }, async () => {
      const { results } = await fetchStarwarsAPI();
      this.setState({ data: results });
      this.setState({ rawData: results });
      this.setState({ isFetching: false });
    });
  }

  render() {
    const { children } = this.props;
    return (
      <StarwarsContext.Provider
        value={ {
          ...this.state,
          handleChange: this.handleChange,
        } }
      >
        {children}
      </StarwarsContext.Provider>

    );
  }
}

StarwarsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default StarwarsProvider;
