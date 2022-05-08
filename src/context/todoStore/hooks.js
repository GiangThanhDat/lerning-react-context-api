import { useContext } from 'react'
import TodoContext from './provider/context'

const useTodoContext = () => {
    const [todoState, dispatch] = useContext(TodoContext)
    return [todoState, dispatch]
}

export default useTodoContext
