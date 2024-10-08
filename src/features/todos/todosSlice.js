const initialState = {
    todos: [
    //   { id: 0, text: 'Learn React', completed: true },
    //   { id: 1, text: 'Learn Redux', completed: false, color: 'purple' },
    //   { id: 2, text: 'Build something fun!', completed: false, color: 'blue' }
    ],
    filters: {
      status: 'All',
      colors: []
    }
  }

  function nextTodoId(todos){
    const maxId=todos.reduce((maxId,todo)=>Math.max(todo.id,maxId),-1)
    return maxId+1;
  }

  export default function todosReducer(state=initialState,action){
    switch(action.type){
        case 'todos/todoAdded':{
                return{
                    ...state,
                    todos:[
                        ...state.todos,
                        {
                            id:nextTodoId(state.todos),
                            text:action.payload,
                            completed: false
                        }
                    ]
                }
            }
        case 'todos/todoToggled':{
            return{
                ...state,
                todos:state.todos.map(todo=>{
                    if(todo.id!==action.payload){
                        return todo;
                    }
                    return {
                        ...todo,
                        completed:!todo.completed
                    }
                })
            }
        }
        case 'todos/colorSelected':{
            const { color, todoId}=action.payload;

            return state.map((todo)=>{
                if(todo.id!==todoId){
                    return todo
                    }
                    return {
                        ...todo,
                        color
                    }
                })
            }
        case 'todos/allCompleted':{
                return state.map((todo)=>{
                    return {
                        ...todo,
                        completed:true
                        }
                })
            }
        case 'todos/todoDeleted': {
            return state.filter((todo) => todo.id !== action.payload)
            }
        case 'todos/completedCleared': {
            return state.filter((todo) => !todo.completed)
            }
        default:
            return state
    }
}