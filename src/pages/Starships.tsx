import axios from "axios";
import { useEffect, useState } from "react";

function Starships() {
    const [ships, setShips] = useState([]);

    useEffect(() => {
        axios.get('https://swapi.dev/api/starships/')
            .then(response => {
                console.log(response.data);
                setShips(response.data.results);
            });
    }, []
    );

    return (        
        <>
        {
            ships.map((ship) => console.log(ship))
        }
        </>
    )
}

export default Starships;