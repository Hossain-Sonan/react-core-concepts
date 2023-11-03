import { useEffect, useState } from "react"

export default function Clients(){
    
    const [clients, setClients] = useState([]);
    
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => console.log(data))

    }, []);
    return(
        <div>
        Clients: {clients.length}
    
        </div>
    )
}