import {useReducer} from 'react'
type CountType = {
    count: number,
}
type ActionType = {
    pay: number,
    type: string
}
type ResetType = {
    type: 'RESET'
}

type Action = ActionType | ResetType;

const initialState = {
    count: 0
}
const reducer = (state:CountType, action:Action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {count: state.count + action.pay}
        case 'DECREMENT':
            return {count: state.count - action.pay}
        case 'RESET':
            return initialState
        default:
            return state
    }
}
function ReducerExam() {
     const [state, dispatch] = useReducer(reducer, initialState)
        const increment = () => {
            dispatch({type: 'INCREMENT',pay:15})
        }
        const decrement = () => {
            dispatch({type: 'DECREMENT',pay:15})
        }
        const reset = () => {
            dispatch({type: 'RESET'})
        }
  return (
   
    <div>
        <h1>{state.count}</h1>
        <button onClick={increment}>15 Artır</button>
        <button onClick={decrement}>15 Azalt</button>
        <button onClick={reset}>Resetle</button>
    </div>
  )
}

export default ReducerExam