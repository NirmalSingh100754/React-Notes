import { useState } from 'react'
import Card from './assets/components/Card';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  return (
    <>
    <h1 className=' bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind Test</h1>
    <Card username="arunsingh"/>
    <Card username="takaleya"/>
    <Card />
    </>
  )
}

export default App
