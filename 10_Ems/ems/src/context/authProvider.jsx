import React, { createContext, useEffect, useState } from 'react'
import { getLocalStorage, setLocalStorage } from '../utils/localStorage';

export const AuthContext = createContext()


function AuthProvider({ children }) {
    const [userData, setUserData] = useState(null);
    
    useEffect(() => {


        if (!localStorage.getItem('employees') || !localStorage.getItem('admin')) {
            setLocalStorage();
        }
        const { employees, admin } = getLocalStorage()
        console.log("Fetched employees:", employees);
        console.log("Fetched admin:", admin);
        setUserData({employees, admin})
    }, [])


    return (
        <div>
            <AuthContext.Provider value={userData}>
                {children}
            </AuthContext.Provider>
        </div>
    )
}

export default AuthProvider
