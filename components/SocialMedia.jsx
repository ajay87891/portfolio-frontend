import React from 'react'
import {BsTwitter } from 'react-icons/bs'
import {FaFacebookF } from 'react-icons/fa'
import { AiFillGithub } from "react-icons/ai";

const SocialMedia = () => {
  return (
    <div className='flex flex-col bottom-0 text-2xl space-y-8 ml-2 md:ml-4  absolute z-10  '>
        <a href='https://twitter.com/ajay87891' target="_blank"  rel="noreferrer" className=' bg-slate-50 hover:bg-sky-500 rounded-full p-2 2xl:p-4 z-[11]'>
          
            <BsTwitter />
        </a>
        <a href='https://github.com/ajay87891' target="_blank"  rel="noreferrer" className='bg-slate-50 hover:bg-sky-500 rounded-full p-2 2xl:p-4 z-[11]'>
            <AiFillGithub />
        </a>
        <a href='https://www.facebook.com/ajaysingh.ajay.754/' target="_blank"  rel="noreferrer"  className='bg-slate-50 hover:bg-sky-500 rounded-full p-2 2xl:p-4 z-[11]'>
            <FaFacebookF />
        </a>

      
    </div>
  )
}

export default SocialMedia
