import React,{useState, useEffect} from 'react'
import {motion} from 'framer-motion'
import {images} from "../constants"
import {urlFor, client} from '../constants/client'
import {MotionWrap} from "../wrapper";

const about = () => {
  const [abouts, setabouts] = useState([]);
  useEffect(() => {
    const query = '*[_type == "abouts"]'
    client.fetch(query).then((data)=>{setabouts(data)
    console.log(data)})
    console.log(abouts);
  }, []);

  // const abouts = [
  //   {title: 'Web Development', description:"I am a goode web devloper",imgUrl:images.about01.src},
  //   {title: 'Frontend', description:"I am a goode free",imgUrl:images.about02.src},
  //   {title: 'Backend', description:"I am a goode web devloper",imgUrl:images.about03.src},
  //   {title: 'Node Js', description:"I am a goode web devloper",imgUrl:images.about04.src},
  // ]

  return (
    <>
    
    <div className='min-h-screen '>
    
    

      <h2 className='text-center md:text-4xl lg:text-6xl text-2xl mt-24'>I Know That <span className='text-sky-400'>Good Design</span>
      <br/>
      Means <span className='text-sky-400'>Good Buisness</span>
      
      </h2>
      <div className='flex justify-center items-start flex-wrap mt-8'>{
        abouts.map((about, index)=>(
          <motion.div 
            whileInView={{x:[-200,0],opacity:1}}
            whileHover={{scale:1.1}}
            transition={{duration:0.5, type:"tween"}}
            className="w-48 flex justify-start items-start flex-col m-8 "
            key={about.title + index}
          >
            <img src={urlFor(about.imgUrl)} alt={about.title} className="w-full h-44 rounded-md object-cover"/>
            <h2 className=" text-xl font-bold mt-5" >{about.title}</h2>
            <p className=" p-text mt-5" >{about.description}</p>




          </motion.div>
        ))



      }</div>

    </div>
    </>
  )
}

export default MotionWrap(about, 'bg-white','about')
