import { useState } from "react";

const StatePlayground = () => {
    const initialCount = 0;
    let [count,setCount] = useState(initialCount);

    // const addOne = () => {
    //     setCount(count+1)
    // }

    const subtOne = () => {
        setCount(prevCount=> { 
            /// large calculation
            return prevCount-1
        })
    }

    const resetCount = () => {
        setCount(initialCount)
    }

    return(
        <>
            <h3>Count:{count}</h3>
            <button onClick={()=> setCount(count+1)}>Add one +1</button>
            <button onClick={subtOne}>Subt one -1</button>
            <button onClick={resetCount}>RESET</button>

        </>
    )
}

export default StatePlayground;