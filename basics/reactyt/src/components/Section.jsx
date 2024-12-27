// import React from 'react'

import { useContext } from "react"
import { dataContext } from "../context/UserContext"

const Section = () => {
    const username = useContext(dataContext)
    return (
        <div>
            <h1>Section {username}</h1>
        </div>
    )
}

export default Section
