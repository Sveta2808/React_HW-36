import React, { useState } from 'react';

export function Counter() {
    const [add, setAdd] = useState(0);
    function addClick() {
        setAdd(add + 1);
    }
    const [subtract, setSubtract] = useState(0);
    function subtractClick() {
        setSubtract(subtract - 1);
    }
    return (
        <div className='title-main'> 
            <p>Number {add + subtract} </p>
            <button className='btn' onClick={subtractClick}>Subtracter</button>
            <button className='btn' onClick={addClick}>Adder</button>
        </div>
    );
}

