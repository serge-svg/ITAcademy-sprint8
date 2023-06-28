import { Link } from "react-router-dom";
import { IShip } from "../@types/ship";
import '../App.css'

function Starship({name, model}: IShip) {

    return (
      <Link to='/shipdetails'>
        <div className="card">
          <h4>{name}</h4>
          <h5>{model}</h5>
        </div>
      </Link>
    )
  }

  export default Starship;