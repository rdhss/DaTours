import React from 'react'
import Section from '../../layout/section'
import Button from '../Button'
import './book.scss'

const Book = () => {
  return (
    <Section classContainer="!bg-testing mb-0 !mb-0">
      <div className='book scale-[.9]'>
        <h1 className='text-gradient-base uppercase p-10 text-3xl font-bold'>start booking now</h1>
        <form action="" className='pl-10'>
          <input type="text" className='block mb-10 p-2 w-80 outline-none border-b-2 border-b-transparent focus:border-b-blue-600 transition-all duration-75' placeholder='Full Name' />
          <input type="text" className='block mb-10 p-2 w-80 outline-none border-b-2 border-b-transparent focus:border-b-blue-600 transition-all duration-75' placeholder='Email Address' />
          <input id="rad1" type="radio" name="rad" className='hidden ' /><label for="rad1" className='text-xl font-bold text-muted mr-10'><span className='cursor-pointer'></span>Small tour group</label>
          <input id="rad2" type="radio" name="rad" className='hidden' /><label for="rad2" className='text-xl font-bold text-muted md:inline inline-block md:mt-0 mt-5'><span className='cursor-pointer'></span>Small tour group</label>
          <div>
          <Button title="next step" classButton="!bg-blue-400 !text-white"/>
          </div>
        </form>
      </div>
    </Section>
  )
}

export default Book