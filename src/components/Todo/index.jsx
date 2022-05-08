import { useCallback, useMemo, useRef } from 'react'
import useTodoContext from '../../context/todoStore/hooks'
import {
    addJob,
    deleteJob,
    setJob,
} from '../../context/todoStore/state/actions'
import TodoItem from '../TodoItem'

const Todo = () => {
    const [todoState, dispatch] = useTodoContext()
    const { job, jobs } = todoState
    const inputJob = useRef(undefined)

    const handleAddJob = () => {
        dispatch(addJob({ name: job, random: Math.floor(Math.random() * 10) }))
        dispatch(setJob(''))
        inputJob.current.focus()
    }

    const handleChangeJob = ({ target }) => dispatch(setJob(target.value))

    // Bọc useCallBack để tránh re-render ToDoItem không cần thiết, khi áp dụng React.memo cho ToDoItem
    const handleRemoveJob = useCallback(
        (job: string) => dispatch(deleteJob(job)),
        []
    )

    const total = useMemo(
        () =>
            jobs.reduce((total: number, job: { random: number }) => {
                total += job.random
                console.log('tính toán lại...')
                return total
            }, 0),
        [jobs]
    )

    return (
        <div style={{ marginLeft: 50 }}>
            <h1>Todo app</h1>
            <input
                style={{ width: '60%' }}
                ref={inputJob}
                value={job}
                onChange={handleChangeJob}
            />
            <span>
                <button style={{ width: '20%' }} onClick={handleAddJob}>
                    add
                </button>
            </span>
            <ul>
                {jobs.map((job: string, key: number) => (
                    <li key={key}>
                        <TodoItem job={job} onRemove={handleRemoveJob} />
                    </li>
                ))}
            </ul>
            <h3>{total}</h3>
        </div>
    )
}

export default Todo
