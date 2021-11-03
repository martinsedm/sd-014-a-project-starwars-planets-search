import React, { Component } from 'react';
import { Header } from '../components/Header';
import { Table } from '../components/Table';
import MyContext from '../components/MyContext';

class home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filters: {
        filterByName: {
          name: '',
        },
      },
      count: 0,
    };

    this.handleChange = this.handleChange.bind(this);
    this.updateCount = this.updateCount.bind(this);
  }

  handleChange(event) {
    this.setState({ filters: { filterByName: { name: event.target.value } }, count: 0 });
  }

  updateCount() {
    this.setState({ count: 1 });
  }

  render() {
    const { filters, count } = this.state;
    const contextValue = {
      filters,
      count,
      updateCount: this.updateCount,
      handleChange: this.handleChange,

    };

    return (
      <MyContext.Provider value={ { contextValue } }>
        <div>
          <Header />
          <Table />
        </div>
      </MyContext.Provider>
    );
  }
}

export default home;
