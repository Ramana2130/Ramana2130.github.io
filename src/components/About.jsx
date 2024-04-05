import React from 'react'
import show from '../assets/show.jpg'

const About = () => {
  return (
    <div className='text-white bg-black  mx-auto ' id='about'>
      <div className='md:grid md:grid-cols-2 sm:py-16'>
        <div className=' md:mt-0 text-left flex '>
          <div className='my-auto mx-6'>
            <h2 className='text-4xl font-bold mb-4 primary-color'>About Me</h2>
            <p className='text-base lg:text-lg'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum vel accusantium pariatur nihil amet quibusdam, tempora expedita recusandae tenetur. Voluptatem optio culpa ipsa atque impedit eveniet tempora et ipsam modi?</p>

          </div>
        </div>
        <img className=' mx-auto rounded-3xl py-8 md:py-0' src={show} width={300} height={300} alt="" />
      </div>
    </div>
  )
}

export default About