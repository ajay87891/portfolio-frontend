import React, {useState} from "react";
import {HiMenuAlt4, HiX} from 'react-icons/hi'
import { motion } from "framer-motion";
import { images } from "../constants";
import bg from '../public/bgWhite.png'

const Navbar = () => {
  const menuItems = ["home", "about", "work", "skills", "contact"]
  const [toggel, setToggel] = useState(false);
  return (
    
    <nav className="w-full flex justify-between items-center  bg-white/20 fixed top-0 backdrop-blur-sm px-10 z-10 py-4">
      <div className="flex justify-center items-center ">
        <img src={images.logo.src} alt="ksd" />
      </div>
      <div className="hidden md:block ">
      <ul className="flex space-x-8 ">
        {menuItems.map(
          (item) => {
            return (
              <li className="cursor-pointer flex flex-col group items-center" key={`link-${item}`}>
                <div className="w-2 h-2 bg-transparent  mb-1 rounded-full group-hover:bg-violet-700" />
                <a className="text-gray-500 font-medium font-Quicksand group-hover:text-violet-700 ease-in-out duration-500 transition-all uppercase" href={`#${item}`}>{item}</a>
              
              </li>
            );
          }
        )}
      </ul>
      </div>
      <div className=" block md:hidden ">
        <button onClick={()=> setToggel(true)}>
        <HiMenuAlt4  className="bg-violet-700 text-white h-8 rounded-full relative w-8"/></button>
        {
          toggel && (<motion.div className="fixed z-20 top-0 bottom-0 right-0 p-4 w-[80%] h-[100vh] flex  flex-col  bg-white shadow-lg bg-cover bg-repeat "
          whileInView={{x:[300,0]}}
          transition={{duration:0.85,ease:'easeOut'}}
          style={{
            backgroundImage: `url(${bg.src})`
          }}
          >
            <button onClick={()=> setToggel(false)}><HiX  className="text-violet-700  h-9 w-9 absolute right-5" /></button>
            <ul className="flex flex-col space-y-8 mt-8">

            {menuItems.map(
          (item) => {
            return (
              <li key={item}>
                <a className="text-gray-500 cursor-pointer font-medium font-Quicksand hover:text-violet-700 ease-in-out duration-500 transition-all uppercase" href={`#${item}`} onClick={()=> setToggel(false)}>{item}</a>
              </li>
            );
          }
        )}
        </ul>


          </motion.div>)
          
        }


      </div>
    </nav>
  );
};

export default Navbar;
