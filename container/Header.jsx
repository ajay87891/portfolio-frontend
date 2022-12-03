import React from "react";
import { motion } from "framer-motion";
import { images } from "../constants";
import bg from '../public/assets/bgIMG.png'
import AppWrap from "../wrapper/AppWrap";

const Header = () => {
  const scaleVariants = {
    whileInView:{
       scale:[0,1],
       opacity:[0,1],
      transition:{
        duration:1,
        ease:"easeInOut"

      }

    }
  }
  const circleImages = [images.next, images.react, images.tailwind]
  return (
   
    <div className="pt-32 bg-cover bg-repeat bg-center relative bg header flex items-center justify-center h-full w-full md:flex-row md:items-start flex-col" style={{
      backgroundImage: `url(${bg.src})`
    }}>
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 1 }}
        className=" header-info flex-[0.65] flex flex-col justify-start items-start h-full lg:w-full mr-0"
      >
        <div className=" header-badge w-full flex justify-end items-end flex-col space-y-4">
          <div className=" badge-cmp min-w-[230px] flex items-center justify-center   py-4 px-8 border-white shadow-[0px_0px_20px_rgba(0,0,0,0.1)] rounded-2xl">
            <span className="text-4xl animate-bounce">👋</span>
            <div className="ml-5">
              <p className=" text-gray-700 text-xl text-left">Hello, I am</p>
              <h1 className="text-4xl font-serif text-black text-center ">Ajay</h1>
            </div>
          </div>

          <div className="tag-cmp flex items-center justify-center flex-col px-8 py-4 border-white rounded-2xl shadow-[0px_0px_20px_rgba(0,0,0,0.1)] min-w-[215px]">
            <p className=" text-gray-700 text-xl w-full uppercase text-right">Web Developer</p>
            <p className=" text-gray-700 text-xl w-full uppercase text-right">Freelancer</p>
          </div>
        </div>
      </motion.div>
      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className=" header-img flex-[1] h-full flex justify-end items-end relative"
      >
        <img src={images.profile.src} alt="profile image" className="w-full object-contain z-[9] rounded-full md:rounded-none lg:rounded-full " />
        <motion.img
          whileInView={{ opacity: [0, 1] }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className=" overlay_circle  absolute left-0 right-0 bottom-0 w-full h-[90%]"
          src={images.circle.src}
          alt="profile-circle"
        />
      </motion.div>
      <motion.div
        variant={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className="app_header_circle flex-[0.75] flex md:flex-col justify-evenly items-start h-full ml-4"
      >
        {circleImages.map((circle,index)=>(
          <div className={` flex items-center justify-center  rounded-full shadow-[0px_0px_20px_rgba(0,0,0,0.1)]  bg-white ${(index ===1)?"md:w-36 m-7 w-24 h-24  md:h-36":"md:w-24 w-20 h-20 md:h-24"}`} key={`circle-${index}`}>
            <img src={circle.src} alt="circle" className="w-[60%] h-[60%]" />
          </div>
        ))}
      </motion.div>
    </div>
    
  );
};

export default AppWrap(Header,'home');
