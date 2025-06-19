import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {

  let [counter,setCounter]=useState(5)
  // let counter=5

  const addValue= () =>
{
  if(counter < 20)
  // counter = counter + 1
  setCounter(counter + 1)
  else
  console.log("counter value cannot be more than 20")
  console.log("Counter Value: ", counter)
}

const subValue=()=>
{
  if(counter > 0)
  setCounter(counter - 1)
  else
  console.log("counter value cannot be less than 0")
  console.log("Counter Value: ", counter)
}

  return (
    <>
      <h1>Chai aur React with Nirmal</h1>
      <h2>Counter Value: {counter}</h2>
      <button onClick={addValue} >Add Value {counter}</button>
      <br />
      <br />
      <button onClick={subValue}>Decrease Value {counter}</button>
    </>
  )
}

export default App
