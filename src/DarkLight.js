import React, { useEffect, useState } from 'react'
import './DarkLight.css'

import { MdOutlineDarkMode } from "react-icons/md";
import { CiLight } from "react-icons/ci";
const DarkLight = () => {
    const [theme, setTheme] = useState(false)

    const handleClick = () => {
        setTheme(!theme)
    }

    useEffect(() => {
        if (theme == true) {
            document.body.classList.add('dark')
        }
        else {
            document.body.classList.remove('dark')
        }
    })

    return (
        <div>
            {theme ? <CiLight onClick={handleClick} /> : <MdOutlineDarkMode onClick={handleClick} />}
        </div>
    )
}

export default DarkLight