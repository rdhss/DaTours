import React from 'react'
import Button from '../Button'
import './package.scss'

const Package = () => {
  return (
    <div className='package relative md:h-[440px] h-[500px] my-14 md:ml-0 ml-4'>
      <div className='front bg-white md:absolute left-0 side transition-all duration-[.8s] w-[300px] h-full '>
        <div className='img h-40 relative'>
        </div>
        <div className='absolute w-60 heading-img md:right-5 top-16 right-[56px]'>
          <span className='text-3xl text-right'>The Sea Explorer</span>
        </div>
        <div className='text-muted w-full flex justify-center'>
          <ul className='w-52'>
            <li>3 days tours</li>
            <li>Up to 30 people</li>
            <li>2 tour guides</li>
            <li>Sleep in cozy hotels</li>
            <li>Difficulty: easy</li>
          </ul>
        </div>
      </div>
      <div className='back bg-green-800 md:absolute mt-[-65px] md:mt-0 left-0 flex items-center justify-center side transition-all duration-[.8s] w-[300px] md:h-full'>
        <div class="card__price-only scale-[.70] md:scale-1">
          <h1 className='text-2xl mb-9 font-light'>Only</h1>
          <h1 class="text-6xl">$297</h1>
          <Button animation title="book now!" />
        </div>
      </div>
    </div>
  )
}

export default Package