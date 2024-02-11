import { useEffect, useReducer } from "react"
import { todoReducer } from "../08-useReducer/todoReducer"

const initialState = []


const init =()=>{
    
    return (localStorage.getItem('todos')) ? JSON.parse(localStorage.getItem('todos')) : []
}


export const useTodo = () => {


    const [todos, dispatch] = useReducer(todoReducer, initialState, init);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])

    const handleNewTodo=(todo)=>{
        const action = {
            type: '[TODO] Add Todo',
            payload: todo,
        }
        dispatch(action)

    }
    
    const handleRemoveTodo=(id)=>{
        dispatch({
            type: '[TODO] Remove Todo',
            payload: id,
        })

    }


    const handletoggleItem=(id)=>{
        dispatch({
            type: '[TODO] Toggle Todo',
            payload: id,
        })
    }

    return ({
    todos,
    handleNewTodo,
    handleRemoveTodo,
    handletoggleItem,
    todosCount: todos.length, 
    pendingTodosCount: todos.filter(todo => !todo.done).length,
  })
}


