import PropTypes from 'prop-types';
import React from 'react';
import StarwarsContext from './StarwarsContext';
import fetchStarwarsAPI from '../services/StarwarsAPI';

class StarwarsProvider extends React.Component {
  constructor() {
    super();

    this.state = {
      column: 'population',
      comparison: 'maior que',
      value: 0,
      data: [],
      keys: [],
      values: [],
      isFetching: false,
      filters: {
        filterByName: {
          name: '',
        },
        filterByNumericValues: [],
      },
    };
    this.getAPI = this.getAPI.bind(this);
    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.getAPI();
  }

  handleChangeName(e) {
    const { rawData, filters } = this.state;
    if (e.target.value !== undefined) {
      this.setState({ filters: { ...filters, filterByName: { name: e.target.value } } });
      const filtered = rawData.filter((element) => (
        element.name.includes(e.target.value)));
      this.setState({ data: filtered });
    }
  }

  handleChange(e) {
    const { name, value } = e.target;
    if (name === 'filterByNumericValues') { this.setState({ value }); }
    if (name === 'comparison') { this.setState({ comparison: value }); }
    if (name === 'column') { this.setState({ column: value }); }
  }

  handleClick() {
    const { filters, column, comparison, value, data } = this.state;
    this.setState({
      filters: {
        ...filters,
        filterByNumericValues: [
          ...filters.filterByNumericValues,
          {
            column,
            comparison,
            value,
          },
        ],
      },
    });

    const filtered = data
      .filter((element) => {
        switch (comparison) {
        case 'maior que':
          return Number(element[column]) > Number(value);
        case 'menor que':
          return Number(element[column]) < Number(value);
        case 'igual a':
          return Number(element[column]) === Number(value);
        default:
          return element;
        }
      });
    this.setState({ data: filtered });
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
          handleChangeName: this.handleChangeName,
          handleChange: this.handleChange,
          handleClick: this.handleClick,
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
