import { useCallback, useMemo, useRef } from 'react'
import useTodoContext from '../../context/todoStore/hooks'
import {
    addJob,
    deleteJob,
    setJob
} from '../../context/todoStore/state/actions'
import TodoItem from '../TodoItem'

const Todo = () => {
    const [todoState, dispatch] = useTodoContext()
    const { job, jobs } = todoState
    const inputJob = useRef(undefined)

    const handleAddJob = () => {
        if (!job) {
            alert('Tên công việc không nên để trống')
            return
        }
        dispatch(addJob({ name: job, random: Math.floor(Math.random() * 10) }))
        dispatch(setJob(''))
        inputJob.current.focus()
    }

    const handleChangeJob = ({ target }) => dispatch(setJob(target.value))

    // Bọc useCallBack để tránh re-render ToDoItem không cần thiết, khi áp dụng React.memo cho ToDoItem
    const handleRemoveJob = useCallback((job) => dispatch(deleteJob(job)), [
        dispatch
    ])

    const total = useMemo(
        () =>
            jobs.reduce((total, job) => {
                total += job.random
                console.log('tính toán lại...')
                return total
            }, 0),
        [jobs]
    )

    return (
        <div>
            <h1>TODO APP</h1>
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                }}
            >
                <input
                    style={{ width: '70%' }}
                    ref={inputJob}
                    value={job}
                    onChange={handleChangeJob}
                />
                <button style={{ width: 100 }} onClick={handleAddJob}>
                    add
                </button>
            </div>

            {jobs.map((job, key) => (
                <TodoItem job={job} onRemove={handleRemoveJob} />
            ))}

            <h3>{total}</h3>
        </div>
    )
}

export default Todo
