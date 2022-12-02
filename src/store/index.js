import { createStore, combineReducers } from "redux"

import colorReducer from "./reducers/colorReducer";

const store = createStore(
    combineReducers({colorReducer}), 
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;