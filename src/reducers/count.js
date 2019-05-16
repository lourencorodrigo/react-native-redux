import { COUNT_ADD, COUNT_SUB } from "../actions/count";

const initialState = {
  count: 0
};

export const count = (state = initialState, action) => {
  switch (action.type) {
    case COUNT_ADD: {
      return {
        ...state,
        count: state.count + 1
      };
    }
    case COUNT_SUB: {
      return {
        ...state,
        count: state.count - 1
      };
    }
    default:
      return state;
  }
};
