import { Route, Routes } from "react-router-dom";
import Home from './pages/Home'
import Starships from './pages/Starships'
import './App.css'

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/starships" element={<Starships />} />
    </Routes>
  )
}

export default App;
