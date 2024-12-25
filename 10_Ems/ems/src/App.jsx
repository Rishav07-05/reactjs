import React, { useContext, useEffect, useState } from 'react'
import Login from './components/Auth/login'
import EmployeeDashboard from './components/Dashboards/employeeDashboard'
import AdminDashboard from './components/Dashboards/adminDashboard'
import { getLocalStorage, setLocalStorage } from './utils/localStorage'
import { AuthContext } from './context/authProvider'

const App = () => {

  // useEffect(() => {
  //   // setLocalStorage()
  //   getLocalStorage()
  // })


  const [user, setUser] = useState(null)

  const authData = useContext(AuthContext)


  useEffect(() => {
    if (authData) {
      const loggedInUser = localStorage.getItem("loggedInUser")
      if (loggedInUser) {
        setUser(loggedInUser.role)
      }
    }
  } ,[authData])


  
  const handleLogin = (email , password) => {
    if (authData?.admin?.email === email && authData?.admin?.password === password) {
      setUser('admin');
      localStorage.setItem('loggedInUser' , JSON.stringify({role: 'admin'}))
    } else if (authData?.employees?.find((e) => e.email === email && e.password === password)) {
      setUser('employee');
      localStorage.setItem('loggedInUser' , JSON.stringify({role: 'employee'}))
        } else {
            alert("Invalid Credentials");
        }
  }

   if (!authData) {
        return <div>Loading...</div>;
    }
  


  return (
    <>
      {!user && <Login handleLogin={handleLogin} />}
        {user === 'admin' && <AdminDashboard />}
        {user === 'employee' && <EmployeeDashboard />}
    </>
  )
}

export default App
