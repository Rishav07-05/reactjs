
import './App.css'
import userContextProvider from './Context/userContextProvider'
import Login from './Components/login'
import Profile from './Components/Profile'

function App() {

  

  return (
   <userContextProvider>
    <h1>React Context Api</h1>
    <Login/>
    <Profile/>
    </userContextProvider>
  )
}

export default App
