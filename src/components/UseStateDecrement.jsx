import React, {useState} from 'react';

function UseStateDecrement() {
    const[number, setNumber]=useState(10);
    return (
        <div>
            <p>{number}</p>
            <button type='button' onClick={()=>setNumber(number-1)}>Decrement</button>
        </div>
    );
}

export default UseStateDecrement;
