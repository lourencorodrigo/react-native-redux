import { combineReducers } from "redux";

import { count } from "../reducers/count";

const reducers = combineReducers({
  count
});

export default reducers;
