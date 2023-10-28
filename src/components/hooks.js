import React from 'react';
import { useState } from 'react';

function Hooks (){

    const [count, setCount] = useState(4)

    function Decrement(){
        setCount(prevCount => prevCount-1)
        setCount(prevCount => prevCount-1)
    }

    setCount(count -1)
    setCount(count -1)


    function Increment(){
        setCount(prevCount=> prevCount+1)
    }
    return (
        <div>
            <button
            onClick={Decrement}>-</button>
            <span>{count}</span>
            <button
            onClick={Increment}>+</button>
        </div>
    )
}

export default Hooks ;