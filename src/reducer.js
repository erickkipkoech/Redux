import todosReducer from "./features/todos/todosSlice";
import filtersReducer from "./features/filters/filstersSlice";
import { combineReducers } from "redux";

const rootReducer=combineReducers({
    todos:todosReducer,
    filters:filtersReducer
})

export default rootReducer;