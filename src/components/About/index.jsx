import React from 'react'
import './about.scss'
import img1 from '../../images/nat-1-large.jpg'
import img2 from '../../images/nat-2-large.jpg'
import img3 from '../../images/nat-3-large.jpg'
import ButtonSec from '../ButtonSec'
import Section from '../../layout/section'

const About = () => {
    return (
        <Section
            head="EXCITING TOURS FOR ADVENTOURS PEOPLE"
            classContainer=""
            id="about"
        >
            <div className='grid md:grid-cols-2 grid-cols-1 gap-6'>
                <div>
                    <div className='text-left text-muted grid grid-cols-1 gap-y-9 md:px-0 px-10'>
                        <div>
                            <h1 className='font-bold mb-2'>YOU'RE GOING TO FALL IN LOVE WITH NATURE</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam ad sed suscipit tenetur. Cum beatae deserunt, aperiam fugiat totam, iusto similique laborum maxime assumenda enim veniam! Quam eligendi laudantium expedita!</p>
                        </div>
                        <div>
                            <h1 className='font-bold mb-2'>YOU'RE GOING TO FALL IN LOVE WITH NATURE</h1>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam ad sed suscipit tenetur. Cum beatae deserunt, aperiam fugiat totam, iusto similique laborum maxime assumenda enim veniam! Quam eligendi laudantium expedita!
                            </p>
                        </div>
                    </div>
                </div>
                <div className='relative'>
                    <img src={img1} alt="" className='absolute md:top-[8rem] md:left-[10rem]  md:w-[280px] w-[150px] top-[1.4rem] left-[14rem]'/>
                    <img src={img3} alt="" className='absolute md:top-[1.45rem] md:left-[4.5rem] md:w-[280px] w-[150px] top-[1rem] left-[2rem]'/>
                    <img src={img2} alt="" className='absolute md:top-[2.5rem] md:left-[17rem]  md:w-[280px] w-[150px] top-[4rem] left-[8rem]'/>
                </div>
            </div>

            <div className='text-center md:text-left md:mt-16 mt-64'>
                <ButtonSec title="Learn More" />
            </div>
            </Section>
            )
}

            export default About