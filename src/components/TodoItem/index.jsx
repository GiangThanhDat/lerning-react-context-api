import React from 'react'

const TodoItem = ({ job, onRemove }) => {
    console.log('re-render')
    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
            }}
        >
            <p style={{ width: '35%' }}>{job.name}</p>
            <p style={{ width: '35%' }}>{job.random}</p>
            <button style={{ width: 100 }} onClick={() => onRemove(job)}>
                x
            </button>
        </div>
    )
}

export default React.memo(TodoItem)
