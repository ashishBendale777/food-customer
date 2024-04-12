import React, { useState } from 'react'
import { MdOutlineDarkMode } from "react-icons/md";
import { CiLight } from "react-icons/ci";
import './Dark.css'

const Dark = () => {
  const [themeIcon, setthemeIcon] = useState(false)

  const onDark = () => setthemeIcon(true)
  const onLight = () => setthemeIcon(false)
  return (
    <div>
      <MdOutlineDarkMode onClick={() => onDark()} />
      <CiLight onClick={() => onLight()} />
    </div>
  )
}


export default Dark