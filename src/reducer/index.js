// import { ASC, DES } from '../hooks/useFilters';

export const ADD_NAME_FILTER = 'ADD_NAME';
export const ADD_NUM_FILTER = 'ADD_NUM_FILTER';
export const REMOVE_NUM_FILTER = 'REMOVE_NUM_FILTER';
export const ORDER = 'ORDER';

export const RESET = 'RESET';

export function isEquivalent(obj1, obj2) {
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);
  if (keys1.length !== keys2.length) {
    return false;
  }
  return keys1.every((key) => obj1[key] === obj2[key]);
}

export const INITIAL_STATE_FILTER = {
  filterByName: {
    name: '',
  },
  filterByNumericValues: [],
  order: {
    column: 'name',
    sort: 'ASC',
  },
};

export function init(initialSate) {
  return initialSate;
}

export function filterReducer(state, action) {
  switch (action.type) {
  case ADD_NAME_FILTER: {
    const { payload: { name, value } } = action;
    return {
      ...state,
      filterByName: {
        [name]: value,
      },
    };
  }

  case ADD_NUM_FILTER: {
    const { filterByNumericValues } = state;
    const { payload } = action;
    if (!filterByNumericValues
      .some((filter) => isEquivalent(payload, filter))) {
      return {
        ...state,
        filterByNumericValues: [...filterByNumericValues, payload],
      };
    }
    return { ...state };
  }

  case REMOVE_NUM_FILTER: {
    const { filterByNumericValues } = state;
    const { payload } = action;
    const filterUpdated = filterByNumericValues
      .filter((filter) => !isEquivalent(payload, filter));
    return {
      ...state,
      filterByNumericValues: [...filterUpdated],
    };
  }

  case ORDER:
    return {
      ...state,
      order: {
        sort: action.payload.order,
        column: action.payload.column,
      },
    };

  case RESET:
    return init(INITIAL_STATE_FILTER);

  default:
    return { ...state };
  }
}
