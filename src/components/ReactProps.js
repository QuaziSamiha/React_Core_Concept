import React from 'react'

export default function ReactProps(props) {

    console.log(props);
    console.log(props.dogluName);

    return (
        <div className='bg-red-300 p-2 m-3 text-center text-red-700'>
            <h1>My doglu name {props.dogluName}</h1>
            <p>He is with me nearly {props.age || 2} years</p>
        </div>
    )
}
