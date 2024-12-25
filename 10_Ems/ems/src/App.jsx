import React, { useEffect, useState } from 'react'
import Login from './components/Auth/login'
import EmployeeDashboard from './components/Dashboards/employeeDashboard'
import AdminDashboard from './components/Dashboards/adminDashboard'
import { getLocalStorage, setLocalStorage } from './utils/localStorage'

const App = () => {

  // useEffect(() => {
  //   // setLocalStorage()
  //   getLocalStorage()
  // })


  const [user, setUser] = useState(null)
  
  const handleLogin = (email , password) => {
    if (email == 'admin@me.com' && password == '123') {
      setUser('admin')
    } else if (email == 'user@me.com' && password == '123') {
      setUser('employee')
    }
    else {
      alert("Invalid Credentials")
    }
  }


  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ''}
      {user == 'admin' ? <AdminDashboard/> : <EmployeeDashboard/>}
    </>
  )
}

export default App
