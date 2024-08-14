import { createStore,applyMiddleware } from "redux";
import rootReducer from "./reducer";
import { composeWithDevTools } from 'redux-devtools-extension';
//import { sayHiOnDispatch,includeMeaningOfLife } from "./exampleAddons/enhancers";
import {print1,print2,print3,loggerMiddleware,alwaysReturnHelloMiddleware,delayedMessageMiddleware} from "./exampleAddons/middleware";

// let preLoadedState
// const persistedTodoString=localStorage.getItem('todos')

// if(persistedTodoString){
//     preLoadedState={
//         todos: JSON.parse(persistedTodoString)
//     }
// }

//const composedEnhancer=compose(sayHiOnDispatch,includeMeaningOfLife)

//const middlewareEnhancer=applyMiddleware(print1,print2,print3)

const middlewareEnhancer=applyMiddleware(loggerMiddleware,alwaysReturnHelloMiddleware,delayedMessageMiddleware)

const composeEngancer=composeWithDevTools(middlewareEnhancer)
const store=createStore(rootReducer,composeEngancer)

export default store;