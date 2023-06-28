import { IShip } from "../@types/ship";
import '../App.css'

function Starship({name, model}: IShip) {

    return (
      <div className="card">
        <h4>{name}</h4>
        <h5>{model}</h5>
      </div>
    )
  }

  export default Starship;