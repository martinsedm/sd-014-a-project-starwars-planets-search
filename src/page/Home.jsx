// import React, { Component } from 'react';
// import { Header } from '../components/Header';
// import Table from '../components/Table';
// import MyContext from '../context/MyContext';

// class home extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       filters: {
//         filterByName: {
//           name: '',
//         },
//         filterByNumericValues: [
//           {
//             column: 'population',
//             comparison: 'maior que',
//             value: '0',
//           },
//         ],
//       },
//       count: 0,
//     };

//     this.handleChange = this.handleChangeName.bind(this);
//     this.handleChangeOptions = this.handleChangeOptions.bind(this);
//     this.updateCount = this.updateCount.bind(this);
//   }

//   handleChangeName(event) {
//     this.setState({
//       filters: { filterByName: { name: event.target.value } }, count: 0 });
//   }

//   handleChangeOptions(event) {
//     const { target } = event;
//     const { name, value } = target;
//     this.setState({
//       filters: { filterByNumericValues: [{ [name]: value }] },
//     });
//   }

//   updateCount() {
//     this.setState({ count: 1 });
//   }

//   render() {
//     const { filters, count } = this.state;
//     const contextValue = {
//       filters,
//       count,
//       updateCount: this.updateCount,
//       handleChangeName: this.handleChangeName,
//       handleChangeOptions: this.handleChangeOptions,
//     };

//     return (
//       <MyContext.Provider value={ { contextValue } }>
//         <div>
//           <Header />
//           <Table />
//         </div>
//       </MyContext.Provider>
//     );
//   }
// }

// export default home;
