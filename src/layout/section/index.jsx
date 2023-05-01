import React from 'react'
import ScrollAnimation from '../../utils/ScrollAnimation'

const Section = (props) => {
  const { head, children, classContainer, noScroll, id } = props
  return (
    <section className={`bg-ligthMuted py-40 mt-[-110px] md:px-24 mb-20 md:pb-32 ${classContainer}`} id={id}>
      {head &&
        <ScrollAnimation>
          <h1 className='tracking-[3px] md:tracking-[6px] text-center md:text-2xl font-bold text-gradient-base mb-14 uppercase'>
            {head}
          </h1>
        </ScrollAnimation>
      }
      <div>
        <ScrollAnimation delay={0.5}>
          {children}
        </ScrollAnimation>
      </div>
    </section>
  )
}

export default Section