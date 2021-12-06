import React, { useState } from 'react'

export default function ReactUseState() {

    // const result = useState(0);
    // console.log(result);

    // const result2 = ['abc', 'def'];
    // console.log(result2[0], result2[1]);
    // const first = result2[0];
    // const second = result2[1];
    // console.log(first, second);

    // const [third, forth] = ['abc', 'def']; // array destructuring
    // console.log(third, forth);

    const [count, setCount] = useState(0);
    // console.log(count, setCount);

    // const handleClick = () => console.log('someone clicked me');

    // const handleClick = () => {
    //     count = count + 1;
    //     setCount(count);
    // }

    const handleClick = () => setCount(count + 1);

    return (
        <div className='border-2 border-green-600 m-3 p-2'>
            <h1>I love Biriyani</h1>
            <button onClick={handleClick} className='bg-green-700 rounded p-2 m-2 text-white hover:bg-green-500'>
                Add Plate
            </button>
            <button onClick={() => { setCount(count - 1) }} className='bg-red-700 rounded p-2 m-2 text-white hover:bg-red-500'>
                Remove Plate
            </button>
            <p>I can eat {count} plates biriyani</p>
        </div>
    )
}
