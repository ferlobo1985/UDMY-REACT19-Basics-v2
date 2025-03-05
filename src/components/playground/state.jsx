import { useState } from "react";

const StatePlayground = () => {
    let [count,setCount] = useState(0);

    // const addOne = () => {
    //     setCount(count+1)
    // }

    return(
        <>
            <h3>Count:{count}</h3>
            <button onClick={()=> setCount(count+1)}>Add one +1</button>
        </>
    )
}

export default StatePlayground;