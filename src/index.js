// import React from 'react'
// import ReactDOM from 'react-dom'
// import './index.css'
// import App from './App'

// import './api/server'

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// )

import store from "./store";

// console.log('Initial State: ', store.getState())

// const unsubscribe= store.subscribe(()=>
//   console.log('State after dispatch: ', store.getState())
// )

// store.dispatch({ type: 'todos/todoAdded', payload: 'Learn about actions' })
// store.dispatch({ type: 'todos/todoAdded', payload: 'Learn about reducers' })
// store.dispatch({ type: 'todos/todoAdded', payload: 'Learn about stores' })

// store.dispatch({ type: 'todos/todoToggled', payload: 0 })
// store.dispatch({ type: 'todos/todoToggled', payload: 1 })

// store.dispatch({ type: 'filters/statusFilterChanged', payload: 'Active' })

// store.dispatch({
//   type: 'filters/colorFilterChanged',
//   payload: { color: 'red', changeType: 'added' }
// })

// unsubscribe();

// store.dispatch({ type: 'todos/todoAdded', payload: 'Try creating a store' })

// console.log('Dispatching Action')
//store.dispatch({ type: 'todos/todoAdded', payload: 'Learn about actions' })
// console.log('Dispatch complete')
//console.log('State after dispatch: ', store.getState())

const dispatchResult = store.dispatch({ type: 'todos/todoAdded' })
console.log(dispatchResult)