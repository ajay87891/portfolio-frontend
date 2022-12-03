import React from 'react'
import {BsTwitter, BsInstagram } from 'react-icons/bs'
import {FaFacebookF } from 'react-icons/fa'

const SocialMedia = () => {
  return (
    <div className='flex flex-col bottom-0 text-2xl space-y-8 ml-2 md:ml-4  fixed z-20 '>
        <div className='bg-slate-50 hover:bg-sky-500 rounded-full p-2'>
            <BsTwitter />
        </div>
        <div className='bg-slate-50 hover:bg-sky-500 rounded-full p-2'>
            <BsInstagram />
        </div>
        <div className='bg-slate-50 hover:bg-sky-500 rounded-full p-2'>
            <FaFacebookF />
        </div>

      
    </div>
  )
}

export default SocialMedia
