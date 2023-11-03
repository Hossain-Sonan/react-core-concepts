import Friend from './Friend'
import { useEffect, useState } from 'react'
import './Friends.css'
export default function Friends(){
    const [friends, setFriends] = useState([])
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setFriends(data))

    }, [])
    return(
        <div className='box'>
            Friends: {friends.length}
            {
                friends.map(friend => <Friend friend={friend}></Friend>)
            }
        </div>
    )
}





// declear a state to hold data
// use effect with our dependency array
// use fetch to load data
// set loaded data to the state