import Chai from "./chai"



function App() {
// {} evaluated expression ionly written inside JSX
  const username = "Nirmal Singh";
  return (
    <>   
    <Chai />
    <h1>Welcome to my first Vite React App.{username}</h1>
    </>
  )
}

export default App
