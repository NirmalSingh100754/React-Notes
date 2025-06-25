import './App.css'
import Profile from './components/profile'
import UserContextProvider from './context/UserContextProvider'
import Login from './components/login'
function App() {

  return (
    <UserContextProvider>
    <h1>Conext API</h1>
    <Login />
    <Profile />
    </UserContextProvider>
  )
}

export default App
