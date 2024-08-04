import { createStore } from "redux";
import rootReducer from "./reducer";

let preLoadedState
const persistedTodoString=localStorage.getItem('todos')

if(persistedTodoString){
    preLoadedState={
        todos: JSON.parse(persistedTodoString)
    }
}

const store=createStore(rootReducer,preLoadedState)

export default store;