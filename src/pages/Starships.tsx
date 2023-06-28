import axios from "axios";
import { useEffect, useState } from "react";
import Starship from "../components/Starship";
import { IShip } from "../@types/ship";

type IShipArray = IShip[];

function Starships() {
    const [ships, setShips] = useState<IShipArray>([]);

    useEffect(() => {
        axios.get('https://swapi.dev/api/starships/')
            .then(response => {
                console.log(response.data);
                setShips(response.data.results);
            });
    }, []);

    return (
        <>
            <h2>Starships</h2>
            {ships.length > 0 ? (
                    ships.map((ship) => (
                            <Starship name={ship.name} model={ship.model} key={ship.name} />                            
                    ))                
             ) : 'loading'
            }
        </>
    )
}

export default Starships;