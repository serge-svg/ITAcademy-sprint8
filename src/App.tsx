import { Link, Route, Routes } from "react-router-dom";
import Home from './pages/Home'
import Starships from './pages/Starships'
import ShipDetails from './pages/ShipDetails'
import './App.css'

function App() {

  return (
    <>
      <header>
        <h1>STAR WARS</h1>
        <nav>
          <Link to='/'>Home</Link>
          <Link to='/starships'>Starships</Link>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/starships" element={<Starships />} />
        <Route path="/shipdetails" element={<ShipDetails />} />
      </Routes>
    </>
  )
}

export default App;
