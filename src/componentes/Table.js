import React, { useContext } from 'react';
import PlanetContext from '../context/PlanetContext';

function Table() {
  const { data, isLoading, nameFilters } = useContext(PlanetContext);
  // const { results } = data;
  const headers = ['name', 'rotation_period', 'orbital_period', 'diameter',
    'climate', 'gravity', 'terrain', 'surface_water', 'population', 'films',
    'created', 'edited', 'url'];

  if (isLoading) return <p>Loading...</p>;

  if (nameFilters.length === 0) return <p>No Planet found</p>;

  return (
    <div>
      <table>
        <tbody>
          <tr>
            { headers.map((title) => <th key={ title }>{title}</th>) }
          </tr>
          { data.map((planet) => (
            <tr key={ planet.id }>
              {headers.map((title, index) => {
                if (index === 0) {
                  return (
                    <td key={ planet[title] } data-testid="planet-name">
                      {planet[title]}
                    </td>
                  );
                }
                return (
                  <td key={ planet[title] }>
                    {planet[title]}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;

// import React, { useContext } from 'react';
// import myContext from '../context/myContext';

// export default function ActiveFilters() {
//   const { filters: { filterByNumericValues } } = useContext(myContext);
//   const { filterFunc: { removeFilter } } = useContext(myContext);
//   return (
//     <div>
//       { filterByNumericValues.map((filter, idx) => {
//         if (idx === 0) return null;
//         return (
//           <div key={ filter.column } data-testid="filter">
//             {`${filter.column} | ${filter.value}`}
//             <button type="button" onClick={ () => removeFilter(idx) }>X</button>
//           </div>
//         );
//       })}
//     </div>
//   );
// }

// import PropTypes from 'prop-types';
// import React, { useEffect, useState } from 'react';
// import myContext from './myContext';

// export default function Provider({ children }) {
//   const [data, setData] = useState([{}]);
//   const API = 'https://swapi-trybe.herokuapp.com/api/planets/';
//   const fetchApi = async () => {
//     const response = await fetch(API);
//     const responseJSON = await response.json();
//     const { results } = responseJSON;
//     const filtered = [...results];
//     setData(filtered);
//   };
//   const [filterOrder, setFilterOrder] = useState(false);
//   useEffect(() => {
//     fetchApi();
//   }, []);

//   const [filters, setFilters] = useState({
//     filtersByName: {
//       name: '',
//     },
//     filterByNumericValues: [
//       {
//         column: '',
//         comparison: ' ',
//         value: '0',
//       },
//     ],
//     order: { column: '', sort: '' },
//   });

//   const changeFilters = (type, value) => {
//     setFilters({
//       ...filters,
//       [type]: value,
//     });
//   };
//   const changeFiltersNumber = (type, value) => {
//     setFilters({
//       ...filters,
//       [type]: [...filters[type], value],
//     });
//   };

//   const changeOrder = (filtro) => {
//     const { column, order } = filters.order;
//     if (order === 'ASC') {
//       filtro.sort((a, b) => a[column] - b[column]);
//     } else {
//       filtro.sort((a, b) => b[column] - a[column]);
//     }
//   };
//   const initialFilter = (filtro) => {
//     const UM_NEGATIVO = -1;
//     filtro.sort((a, b) => {
//       const nameA = a.name.toUpperCase();
//       const nameB = b.name.toUpperCase();
//       if (nameA < nameB) return UM_NEGATIVO;
//       if (nameA < nameB) return 1;
//       return 0;
//     });
//   };
//   const filterData = () => {
//     const { name } = filters.filtersByName;
//     const { filterByNumericValues } = filters;
//     let filtered = [{}];
//     if (data.length > 1) {
//       filtered = data.filter((planet) => planet.name.includes(name));
//       initialFilter(filtered);
//       // console.log(data);
//       if (filterOrder) changeOrder(filtered);
//       filterByNumericValues.map(({ column, comparison, value }) => {
//         filtered = filtered.filter((plnt) => {
//           const compare = Number(plnt[column]);
//           const valor = Number(value);
//           if (comparison === 'maior que') return compare > valor;
//           if (comparison === 'menor que') return compare < valor;
//           if (comparison === 'igual a') return compare === valor;
//           return true;
//         });
//         return filtered;
//       });
//     }
//     return filtered;
//   };

//   const removeFilter = (idx) => {
//     const { filterByNumericValues } = filters;
//     const newFilter = [...filterByNumericValues];
//     newFilter.splice(idx, 1);
//     setFilters({
//       ...filters,
//       filterByNumericValues: [...newFilter],
//     });
//   };

//   const context = {
//     data: filterData(),
//     filters,
//     filterFunc: { changeFilters, changeFiltersNumber, removeFilter, setFilterOrder },
//   };
//   return (
//     <myContext.Provider value={ context }>
//       {children}
//     </myContext.Provider>

//   );
// }

// Provider.propTypes = {
