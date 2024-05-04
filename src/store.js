import { createStore, combineReducers } from "redux";

// reducer import
import todoReducer from "./reducers/todoReducer";

const reducers = combineReducers({todo:todoReducer});

const store= createStore(reducers);

export default store;