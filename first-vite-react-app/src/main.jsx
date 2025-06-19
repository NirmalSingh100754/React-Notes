import React from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'

function Nirmal()
{
  return (
    <h1>Welcome to Nirmal Singh's first Vite React App.</h1>
  )
  }

const Reactele = {
    type:'a',
    props:{
        href:'https//www.google.com',
    target:'_blank'},
    children: 'Click me to visit Google'
}

const anotherElement=(
    <a href="https://www.google.com">visit to google</a>
)

const reactElement=React.createElement(
    'a',
    {href:'https://www.google.com', target:'_blank'},
    'Click me to visit Google'
)

createRoot(document.getElementById('root')).render(
    // Nirmal()
    // anotherElement
    // <Nirmal />
    // reactElement
    <App />
)
