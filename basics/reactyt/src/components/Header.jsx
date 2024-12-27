// import React from 'react'

import { useContext } from "react"
import { dataContext } from "../context/UserContext"

const Header = () => {
const username = useContext(dataContext)
    return (
        <div>
            <h1>Header {username}</h1>
        </div>
    )
}

export default Header
