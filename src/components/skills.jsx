import React from 'react'
import react from '../assets/react.png'
import h2 from '../assets/h2.png'
import cs from '../assets/cs.png'
import jsj from '../assets/jsj.png'
import tcss from '../assets/tcss.png'


const Skills = () => {
    return (
        <div className=' border border-gray-600 bg-black text-grey-400 md:h-[150px]  mx auto grid grid-cols-6
    place-items-center md:flex md:justify-between md:items-center'>

            <h2 className='text-gray-700 text-xl md:text-4xl font-bold m-4'>
                My <br />Tech<br />Stacks
            </h2>

            <div className='flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]'>
                <img src={h2} alt="" />
                <p className='mt-2 text-gray-400'>HTML</p>
            </div>

            <div className='flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]'>
                <img src={cs} alt="" width={100} height={100} />
                <p className='mt-2 text-gray-400'>CSS</p>
            </div>

            <div className='flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]'>
                <img src={jsj} alt="" width={100} height={100} />
                <p className='mt-2 text-gray-400'>JS</p>
            </div>
            <div className='flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]'>
                <img src={tcss} alt="" width={100} height={100} />
                <p className='mt-6 text-gray-400'>T CSS</p>
            </div>

            <div className='flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]'>
                <img src={react} alt="" width={100} height={100} />
                <p className='mt-2 text-gray-400'>REACT</p>
            </div>

        </div>
    )
}

export default Skills;