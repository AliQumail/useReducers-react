import { useReducer } from "react"

const countReducer = (state,action) => {
    if (action.type === 'increment'){
        return state + 1; 
    } else if (action.type === 'decrement'){
        return state - 1;
    }
}

const CounterExample = () =>{
  
    const [state,dispatch] = useReducer(countReducer,0);

    return <div>
        <p>{state}</p>
        <button onClick={()=>dispatch({type:"increment"})}>+</button>
        <button onClick={()=>dispatch({type:"decrement"})}>-</button>
    </div>
}

export default CounterExample;