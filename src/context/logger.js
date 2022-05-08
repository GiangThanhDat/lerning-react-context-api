const logger = (reducer) => (prevState: any, action: { type: any }) => {
    console.group(action.type)

    // prev state
    console.log('pervState', prevState)
    console.log('action', action)

    const nextState = reducer(prevState, action)

    console.log('nextState', nextState)
    console.groupEnd()

    // next state
    return nextState
}

export default logger
