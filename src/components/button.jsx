import React from 'react'
import "./button.css"

const ButtonDetails = ({text,bg,color}) => {
  return (
    <div>
     <button className='details' style={{backgroundColor:bg,color:color}}>{text}</button>
    </div>
  )
}

export default ButtonDetails