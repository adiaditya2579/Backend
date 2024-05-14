import { useState } from 'react'
import './App.css'
import { useEffect } from 'react'
import axios from 'axios'

function App() {
  const [jokes, setjokes] = useState([])

  useEffect(() => {
    axios.get('/api/jokes')
    .then((response)=>{
      setjokes(response.data)
    })
    .catch((error)=>{
      console.log(error);
    })
  },[])
  

  return (
    <>
      <h1>Chai aur code</h1>
      <p>Jokes: {jokes.length}</p>

      {jokes.map((joke, index)=>(
        <div key={joke.id}>
          <h2>{joke.name}</h2>
          <p>{joke.joke}</p>
        </div>
      ))}
    </>
  )
}
export default App
