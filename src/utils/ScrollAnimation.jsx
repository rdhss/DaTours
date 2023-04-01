import React, { Children } from 'react'
import AOS from 'aos'
import PropsTypes from 'prop-types'
import 'aos/dist/aos.css'
import { useEffect } from 'react';



const ScrollAnimation = ({delay, duration, name, children, disable}) => {
    useEffect(()=>{
        AOS.init({
          once : true,
          delay,
          duration,
          disable
        })
    })
  return (
    <div data-aos={name}>
        {children}
    </div>
  )
}

ScrollAnimation.PropsTypes ={
  name: PropsTypes.string,
}

ScrollAnimation.defaultProps = {
  name: 'fade-up',
  duration : 500,
  delay : 0,
  disable : false
}

export default ScrollAnimation