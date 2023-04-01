import React from 'react'
import logoHeader from '../../images/logo-white.png'


const Footer = () => {
  return (
    <footer className='bg-[#333] h-[75vh] flex flex-col items-center justify-center md:px-10'>
      <div className='mb-32'>
      <img src={logoHeader} alt="logo"  width={150} />
      </div>

      <div className="flex md:flex-row flex-col gap-y-10 md:justify-between justify-center px-7 w-full mt-">
        <div className='border-t-[1px] pt-3 border-white flex gap-5 text-white w-full md:w-[348.5px]'>
          <a href="https://google.com">COMPANY</a>
          <a href="https://google.com">CONTACT</a>
          <a href="https://google.com">CARRERS</a>
          <a href="https://google.com">TERMS</a>
          {/* <a href="https://google.com">POLICY</a> */}
        </div>
        <div className='border-t-[1px] pt-3 border-white flex gap-5 text-white md:w-[348.5px] font-medium'>
          build by Ridho Suhendar. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum rerum sint vel commodi, numquam amet reprehenderit repellendus iste sapiente consectetur ad dolore veritatis reiciendis, minus nobis perspiciatis placeat corrupti eius.
        </div>
      </div>
    </footer>
  )
}

export default Footer