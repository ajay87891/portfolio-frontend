import React from 'react'
import {BsTwitter, BsInstagram } from 'react-icons/bs'
import {FaFacebookF } from 'react-icons/fa'

const SocialMedia = () => {
  return (
    <div className='flex flex-col bottom-0 text-2xl space-y-8 ml-2 md:ml-4  absolute z-10  '>
        <a href='https://www.google.com' target="_blank"  rel="noreferrer" className=' bg-slate-50 hover:bg-sky-500 rounded-full p-2 2xl:p-4 z-[11]'>
          
            <BsTwitter />
        </a>
        <a href='https://www.google.com' target="_blank"  rel="noreferrer" className='bg-slate-50 hover:bg-sky-500 rounded-full p-2 2xl:p-4 z-[11]'>
            <BsInstagram />
        </a>
        <a href='https://www.google.com' target="_blank"  rel="noreferrer"  className='bg-slate-50 hover:bg-sky-500 rounded-full p-2 2xl:p-4 z-[11]'>
            <FaFacebookF />
        </a>

      
    </div>
  )
}

export default SocialMedia
