import React, { useState, useContext } from 'react'
import { DarkTheme } from '../App'
function DarkMode() {
    // const [ mode, ]
    const [Mystyle, setMystyle] = useState({
        color: "white",
        background: "black"
    })
    // const theme = useContext(DarkTheme)
    const [lightmode, setLightmomde] = useState("Light Mode")
    function darkMode() {
        if (Mystyle.color === "white") {
            setMystyle({
                color: "black",
                background: "white"

            })
            setLightmomde("Dark Mode")

        }
        else {

            setMystyle({
                color: "white",
                background: "black"
            })
            setLightmomde("Light Mode")
        }

    }

    return (
        <div className="mode"
            style={Mystyle}>

            <h1>Welcome to New Project</h1>


            <button onClick={darkMode}>{lightmode}</button>

        </div>

    )
}

export default DarkMode