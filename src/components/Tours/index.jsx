import React from 'react'
import Section from '../../layout/section'
import ButtonSec from '../ButtonSec'
import Package from '../Package'

const Tours = () => {
  return (
    <Section head="MOST POPULAR TOURS" classContainer="pt-72 mt-[-18rem] text-center" id="tours">
      <div className='grid md:grid-cols-3 grid-cols-1 md:gap-y-10 gap-y-20 ml-10'>
      <Package/>
      <Package/>
      <Package/>
      {/* <Package/> */}
      </div>
      <div className='ml-6 md:ml-0 mt-40'>
        <ButtonSec title="discover all tours" />
      </div>
    </Section>
  )
}

export default Tours