import React from 'react'
import './learnmore.scss' 

const ButtonSec = ({title}) => {
  return (
    <button className='cta uppercase font-bold hover:text-white'>
        <span>
        {title}
        </span>
    </button>
  )
}

export default ButtonSec