import { ADD_JOB, DELETE_JOB, SET_JOB } from './constant'

const todoInitial = {
    job: '',
    jobs: [],
}

const reducer = (state, action) => {
    switch (action.type) {
        case SET_JOB:
            return { ...state, job: action.payload }
        case ADD_JOB:
            return {
                ...state,
                jobs: [...state.jobs, action.payload],
            }
        case DELETE_JOB: {
            return {
                ...state,
                jobs: state.jobs.filter((job) => job !== action.payload),
            }
        }
        default:
            throw new Error('Invalid action type')
    }
}

export { todoInitial }
export default reducer
