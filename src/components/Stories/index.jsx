import React from 'react'
import Section from '../../layout/section'
import video1 from '../../images/video.mp4'
import video2 from '../../images/video.webm'
import Comment from '../Comment'

const Stories = () => {
  return (
    <Section
        head="WE MAKE PEOPLE GENUINELY HAPPY"
        classContainer="text-center relative  px-6 overflow-hidden"
        noScroll={true}
        id="stories"
    >
        <video class="absolute top-0 left-0 opacity-20 z-[-1] scale-[10] md:scale-150" autoplay muted loop>
                        <source src={video1} type="video/mp4"/>
                        <source src={video2} type="video/webm"/>
                        Your browser is not supported!
        </video>
        <div className='w-full flex flex-col items-center gap-10 mt-20'>
            <Comment/>
            <Comment/>
        </div>
    </Section>
  )
}

export default Stories