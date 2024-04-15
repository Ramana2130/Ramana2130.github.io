import React from 'react'
import { TypeAnimation } from 'react-type-animation'
import mypic from '../assets/mypic.png'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'
const Hero = () => {
    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, [])
    return (
        <div className='grid grid-cols-1 sm:grid-cols-3 gap-8 md:h-[70vh] mx-auto py-8 bg-black' data-aos="fade-up">
            <div className='col-span-1 my-auto mx-auto w-[300px] h-auto lg:w-[350px] '>
                <img className='rounded-2xl' src={mypic} alt="my image" />
            </div>
            <div className='col-span-2  px-5 mt-11'>

                <h1 className='primary-color text-4xl sm:text-5xl lg:text:8xl font-extrabold'>
                    <span className="text-white primay-color">
                        I'm a
                    </span><br />
                    <TypeAnimation
                        sequence={[
                            "frontend Dev",
                            1000,
                            "MERN Stack Dev",
                            1000,
                        ]}
                        wrapper='span'
                        speed={50}
                        repeat={Infinity}
                    />
                </h1>
                <p className='text-white sm:text-lg my-6 lg:text-xl'>
                    My name is RAMANA S and I have 3+ month experience in webDevolpment.
                </p>
                <div className='my-8'>
                    <a href="/" className='px-6 py-3 w-full rounded-xl mr-4
                bg-gradient-to-r from-orange-400 to-pink-500 text-white' >Download CV</a>
                    <a href="/" className='px-6 py-3 w-full rounded-xl mr-4
                border border-gray-400 hover:bg-gradient-to-r from-orange-400 to-pink-500 text-white hover:border-none' >Hire Me</a>
                </div>

            </div>
        </div>
    )
}

export default Hero