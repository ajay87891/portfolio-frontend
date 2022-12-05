import React, {useState} from "react";
import { HiX} from 'react-icons/hi'
import { motion } from "framer-motion";
import { images } from "../constants";
import bg from '../public/bgWhite.png'

const Navbar = () => {
  const menuItems = ["home", "about", "work", "skills", "contact"]
  const [toggel, setToggel] = useState(false);
  return (
    
    <nav className="w-full flex justify-between items-center  bg-white/20 fixed top-0 backdrop-blur-sm px-10 z-40 py-4">
      <div className="flex justify-center items-center  ">
        <img src={images.logo.src} alt="ksd" className="max-w-[150px] 2xl:max-w-[220px]" />
      </div>
      <div className="hidden md:block ">
      <ul className="flex space-x-8 ">
        {menuItems.map(
          (item) => {
            return (
              <li className="cursor-pointer flex flex-col group items-center" key={`link-${item}`}>
                <div className="w-2 h-2 bg-transparent  mb-1 rounded-full group-hover:bg-sky-700" />
                <a className="text-gray-500 font-medium 2xl:text-2xl font-Quicksand group-hover:text-sky-700 ease-in-out duration-500 transition-all uppercase" href={`#${item}`}>{item}</a>
              
              </li>
            );
          }
        )}
      </ul>
      </div>
      <div className="md:hidden ">
        <button onClick={()=> setToggel(true)} className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200     ease-linear duration-500">
        <svg
                className="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg></button>
        {
          toggel ? (<motion.div className=" opacity-0 fixed z-50 top-0 bottom-0 right-0 p-4 w-[80%] h-[100vh] flex  flex-col  bg-sky-100 shadow-lg bg-cover bg-repeat "
          style={{
            backgroundImage: `url(${bg.src})`
          }}
          whileInView={{x:[300,0], opacity:[0,1]}}
           transition={{duration:0.75,ease:'easeOut'}}
          
          >
            <button onClick={()=> setToggel(false)}><HiX  className="text-sky-700  h-9 w-9 absolute right-5" /></button>
            <ul className="flex flex-col space-y-8 mt-8">

            {menuItems.map(
          (item) => {
            return (
              <li key={item}>
                <a className="text-gray-500 text-2xl cursor-pointer font-medium font-Quicksand hover:text-sky-700 ease-in-out duration-500 transition-all uppercase" href={`#${item}`} onClick={()=> setToggel(false)}>{item}</a>
              </li>
            );
          }
        )}
        </ul>


          </motion.div>):""
          
        }


      </div>
    </nav>
  );
};

export default Navbar;
