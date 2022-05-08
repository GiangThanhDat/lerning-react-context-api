import { useReducer } from 'react'
import reducer, { todoInitial } from '../state/reducer'
import TodoContext from './context'
import logger from '../../logger'

const TodoProvider = ({ children }) => {
    const [todoState, dispatch] = useReducer(logger(reducer), todoInitial)

    return (
        <TodoContext.Provider value={[todoState, dispatch]}>
            {children}
        </TodoContext.Provider>
    )
}

export default TodoProvider
