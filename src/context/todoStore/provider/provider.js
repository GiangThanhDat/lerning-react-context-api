import { useReducer } from 'react'
import reducer, { todoInitial } from '../state/reducer'
import TodoContext from './context'

const TodoProvider = ({ children }) => {
    const [todoState, dispatch] = useReducer(reducer, todoInitial)

    return (
        <TodoContext.Provider value={[todoState, dispatch]}>
            {children}
        </TodoContext.Provider>
    )
}

export default TodoProvider
