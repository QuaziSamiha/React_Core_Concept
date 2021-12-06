import React, { useEffect, useState } from 'react'

export default function ReactUseEffect() {

    const [users, setUsers] = useState([]);

    // useEffect(() => {
    //     fetch('https://jsonplaceholder.typicode.com/users')
    //         .then(res => res.json())
    //         .then(data => console.log(data))
    // }, [])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [])

    // console.log(users);

    return (
        <div>
            {
                users.map((user, index) => <li key={index}>{user.name}</li>)
            }
        </div>
    )
}
