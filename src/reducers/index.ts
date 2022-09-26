import { combineReducers } from "redux";
import todosReducer from "./todosSlice";
import visibilityFilterReducer from "./visibilityFilterSlice";

export default combineReducers({
  todos: todosReducer,
  visibilityFilter: visibilityFilterReducer,
});
