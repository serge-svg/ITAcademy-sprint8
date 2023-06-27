import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'


function App() {
  useEffect(() => {
    axios.get('https://swapi.dev/api/starships/')
      .then(response => {
          console.log(response.data);
    });
  },[]
);

  return (
    <>
    </>
  )
}

export default App;
