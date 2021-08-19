import { createStore } from "redux";
import taskReducer from "./reducer";
import state from "./initialState";

const store = createStore(taskReducer, state);

export default store;
