import { SAVE_PLANETS } from '../actions';

const INITIAL_STATE = {
  planetas: {},
};

function planetsReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case SAVE_PLANETS:
    return {
      ...state,
      planetas: action.payload,
    };
  default:
    return state;
  }
}

export default planetsReducer;
