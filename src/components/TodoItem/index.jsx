import React from 'react'

const TodoItem = ({ job, onRemove }) => {
    console.log('re-render')
    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'flex-start',
                alignItems: 'center',
            }}
        >
            <div style={{ width: '30%' }}>
                <p>{job.name}</p>
            </div>
            <div style={{ width: '30%' }}>
                <p>{job.random}</p>
            </div>
            <button style={{ width: '20%' }} onClick={() => onRemove(job)}>
                x
            </button>
        </div>
    )
}

export default React.memo(TodoItem)
