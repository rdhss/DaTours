import React from 'react'
import './button.scss'

const Button = (props) => {
    const {
        animation,
        title,
        classButton
    } = props

    return (
        <button className={`${classButton} bg-white py-4 px-8 text-xs md:text-md text-muted rounded-full mt-10 ${animation ? 'btn-hover-top' : ''} transition-all uppercase`}>
            {title}
        </button>
    )
}

export default Button