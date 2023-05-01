import React from 'react'
import Section from '../../layout/section'
import './feature.scss'
import { featureItem } from './constant'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMap } from '@fortawesome/free-regular-svg-icons'
import ScrollAnimation from '../../utils/ScrollAnimation'

const Features = () => {

  return (
    <Section classContainer="skew-y-[-3deg] bg-features pb-40 !px-10" id="features">
        <div className='skew-y-[3deg] grid md:grid-cols-4 grid-cols-1 text-muted gap-4'>
          {featureItem.map(item => 
          <ScrollAnimation>
            <div  className='transition text-center duration-200 hover:translate-y-[-40px] bg-white/90 rounded-md md:p-6 p-3'>
                <i className='text-blue-400'>
                    <FontAwesomeIcon icon={faMap} className="h-[60px] mb-5 mt-4"/>
                </i>
                <p className='font-bold md:text-xl uppercase md:mb-10 mb-2 h-10'>{item.title}</p>
                <p className='md:text-md text-sm'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita similique qui est at dignissimos magnam, atque rerum quasi perspiciatis, quisquam esse minus dolore quaerat error rem laborum ad corporis? Vero.</p>
            </div>
            </ScrollAnimation>
            )}
        </div> 
    </Section>
  )
}

export default Features