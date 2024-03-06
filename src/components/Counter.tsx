import React, { useReducer } from 'react'


const initialState = {
    count: 0
}

const INCREMENT = "INCREMENT"
const INCREMENTBYAMOUNT = "INCREMENTBYAMOUNT"
const RESET = "RESET"
const DECREMENT = "DECREMENT"


type  IncrementActionType = {type: "INCREMENT"}
type  ResetActionType = {type: "RESET"}
type  DecrementActionType = {type: "DECREMENT"}
type  IncrementbyAmountActionType = {type: "INCREMENTBYAMOUNT", payload: number}

type CounterActionType = IncrementActionType | ResetActionType | DecrementActionType | IncrementbyAmountActionType



const reducer = (state: typeof initialState, action: CounterActionType) => {
    switch (action.type) {
        case INCREMENT:
            return {count: state.count + 1}
        case INCREMENTBYAMOUNT:
            return {count: state.count + action.payload}
        case RESET:
            return {count: 0}
        case DECREMENT:
            return {count: state.count - 1}
    
        default:
         throw new Error();
    }
}

const Counter = () => {
    const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <div>
        <h4>Count : {state.count}</h4>
        <button onClick={() => {dispatch({ type: INCREMENT });}}>Increment</button>
        <button onClick={() => {dispatch({ type: INCREMENTBYAMOUNT, payload: 5 });}}>IncrementbyAmount</button>
        <button onClick={() => {dispatch({ type: RESET });}}>Reset</button>
        <button onClick={() => {dispatch({ type: DECREMENT });}}>Decrement</button>
    </div>
  )
}

export default Counter