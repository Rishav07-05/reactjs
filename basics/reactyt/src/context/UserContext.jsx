// import React from 'react'

import { createContext } from "react"
export const dataContext = createContext() 

const UserContext = ({children}) => {

    const username = 'Riss'

    return (
        <div>
            <dataContext.Provider value={username}>
                {children}
            </dataContext.Provider>
        </div>
    )
}

export default UserContext
