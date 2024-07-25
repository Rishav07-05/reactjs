
import './App.css'
import Login from './Components/login'
import Profile from './Components/Profile'
import UserContextProvider from './Context/userContextProvider'

function App() {
  

  return (
    <UserContextProvider>
      <h1>React & Context Api</h1>
      <Login />
      <Profile />
    </UserContextProvider>
  )
}

export default App