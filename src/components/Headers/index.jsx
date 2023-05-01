import React from 'react'
import './headers.scss'
import logoHeader from '../../images/logo-white.png'
import Button from '../Button'

const Headers = () => {
  return (
    <header className="header h-[100vh] bg-headers relative flex items-center" id='home'>
        <div className="logo-box">
            <img src={logoHeader} alt="logo" className="absolute top-6 left-5" width={50}/>
        </div>

        <div className="text-box w-full text-center">
            <h1 className="grid grid-cols-1 gap-y-4">
                <span className="text-white text-5xl md:text-6xl uppercase md:tracking-[35px] tracking-[10px] animate-slide-right">Outdoors</span>
                <span className="heading-primary-sub slide-left text-md md:text-2xl md:tracking-[20px] tracking-[7px] text-white uppercase animate-slide-left">is where life happens</span>
            </h1>

            <Button animation title="discover our tours" classButton=" animate-slide-top"/>
        </div>
    </header>
  )
}

export default Headers