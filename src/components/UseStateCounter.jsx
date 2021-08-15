import React, {useState} from 'react';

function UseStateCounter() {
    const[number, setNumber]=useState(1);
    return (
        <div>
            <p>{number}</p>
            <button type='button' onClick={()=>setNumber(number+1)}>Increment Number</button>
        </div>
    );
}

export default UseStateCounter;
