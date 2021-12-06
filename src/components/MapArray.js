import React from 'react'

export default function MapArray(props) {
    return (
        <div className='border-2 p-3 m-2 border-gray-700'>
            <p>{props.detailInfo}</p>
            <p>{props.catName}</p>

            <div className='bg-indigo-300 p-3 m-2 rounded'>
                <p>My Friend {props.friendName}, she is now {props.friendAge}</p>
            </div>
        </div>
    )
}
