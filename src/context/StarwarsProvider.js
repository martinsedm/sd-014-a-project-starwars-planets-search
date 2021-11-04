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
    };
    this.getAPI = this.getAPI.bind(this);
  }

  componentDidMount() {
    this.getAPI();
  }

  getAPI() {
    // onde aprendi a omitir o residents com o spread
    // https://codeburst.io/use-es2015-object-rest-operator-to-omit-properties-38a3ecffe90
    const values = [];
    this.setState({ isFetching: true }, async () => {
      const { results } = await fetchStarwarsAPI();
      results.map(({ residents, ...key }) => {
        values.push(Object.values(key));
        return this.setState({
          data: results,
          keys: Object.keys(key),
          values,
          isFetching: false,
        });
      });
    });
  }

  render() {
    const { children } = this.props;
    return (
      <StarwarsContext.Provider
        value={ {
          ...this.state,
        } }
      >
        {children}
      </StarwarsContext.Provider>

    );
  }
}

StarwarsProvider.propTypes = {
  children: PropTypes.shape([]).isRequired,
};

export default StarwarsProvider;
