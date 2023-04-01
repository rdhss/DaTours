import React from 'react'
import img from '../../images/nat-8.jpg'
import './comment.scss'

const Comment = () => {
    return (
        <div className='md:skew-x-[-20deg] bg-white py-10 md:px-20 px-5 md:w-[50rem] w-[20rem]'>
            <div className='md:skew-x-[20deg] '>
                <div className='circle translate-x-[-3rem] rounded-full md:ml-0 ml-14 w-[100px] h-[100px] overflow-hidden flex items-center'>
                    <img src={img} alt="" width={500} className="scale-150" />
                </div>
            </div>
            <div className='md:skew-x-[20deg] text-left text-muted'>
                <h1 className='font-bold uppercase mb-5'>
                    I HAD THE BEST WEEK EVER WITH MY FAMILY
                </h1>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt assumenda aspernatur fugiat recusandae aperiam ad, consequuntur reiciendis at excepturi sequi? Doloremque maiores saepe fuga dignissimos, reprehenderit cumque porro et sint.
            </div>
        </div>
    )
}

export default Comment