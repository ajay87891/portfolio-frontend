import React, { useState, useEffect } from "react";
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import { motion } from "framer-motion";
import { urlFor, client } from "../constants/client";

const Work = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });
  const [works, setWorks] = useState([]);
  const [filterWorks, setFilterWorks] = useState([]);
  const handelWorkFilter = (item)=>{
    setActiveFilter(item)
    setAnimateCard([{y: 100, opacity: 0}])
    setTimeout(() => {
      setAnimateCard({y: 0, opacity: 1})
      if(item === 'All'){
        setFilterWorks(works);
      } else{
        setFilterWorks(works.filter((work)=>work.tags.includes(item)))
      }
      
    }, 500)
    


  }
  useEffect(() => {
    const query = '*[_type == "works"]';
    client.fetch(query).then((data) => {
      setWorks(data);
      setFilterWorks(data);
    });
  }, []);
  return (
    <>
      <a id="work" />
      <div className="min-h-screen ">
        <h2 className="text-center md:text-4xl lg:text-6xl text-2xl mt-24">
          My Creative <span className="text-sky-400">Portfolio</span>
        </h2>
        <div className="app_work_filter flex justify-center items-center flex-wrap 2xl:space-x-6 space-x-3 mt-16 mb-8">
          {["All", "React JS", "Next JS" ].map(
            (item, index) => (
              <div
                key={index}
                onClick={() => handelWorkFilter(item)}
                className={`app_work-filter-item px-4 py-2 font-bold hover:text-white cursor-pointer shadow-lg hover:bg-sky-400 my-2 transition-all duration-300 ease-linear ho 2xl:px-8 2xl:py-4 flex bg-white rounded-lg border-0 items-center justify-center ${
                  activeFilter === item ? "item-active bg-sky-500 text-white" : ""
                }`}
              >
                {item}
              </div>
            )
          )}
        </div>
        <motion.div
          animate={animateCard}
          transition={{ duration: 0.5, delayChildren: 0.5 }}
          className="app__work_PortFolio flex flex-wrap justify-center items-center "
        >
          {filterWorks.map((work, index) => (
            <div
              className="app_work_item flex-col w-[270px] 2xl:w-[470px] cursor-pointer transition-all duration-300 ease-linear m-8 p-4 rounded-lg bg-white flex items-center hover:shadow-xl shadow-sky-500 justify-center"
              key={index}
            >
              <div className="app__work_img w-full h-[230px] 2xl:h-80 rounded-lg object-cover flex items-center justify-center relative">
                <img src={urlFor(work.imgUrl)} alt={work.name} />
                <motion.div
                  whileHover={{ opacity: [0, 1] }}
                  transition={{
                    duration: 0.25,
                    ease: "easeInOut",
                    staggerChildren: 0.5,
                  }}
                  className="app-work-hover flex items-center justify-center absolute top-0 left-0 bottom-0 right-0 w-full h-full bg-black/20 rounded-lg opacity-0 transition-all duration-300 ease-linear "
                >
                  <a href={work.projectLink} target="_blank" rel="noreferrer">
                    <motion.div
                      
                      whileInView={{ scale: [0, 1] }}
                      transition={{ duration: 0.25 }}
                      className=" flex items-center justify-center w-12 rounded-full h-12 mx-1 text-2xl 2xl:text-4xl text-white bg-black/70 2xl:w-20 2xl:h-20 2xl:mx-4 hover:text-sky-600"
                    >
                      <AiFillEye />
                    </motion.div>
                  </a>
                  <a href={work.codeLink} target="_blank" rel="noreferrer">
                    <motion.div
                      
                      whileInView={{ scale: [0, 1] }}
                      transition={{ duration: 0.25 }}
                      className=" flex items-center justify-center w-12 rounded-full h-12 mx-1 bg-black/70 text-2xl text-white 2xl:text-4xl  2xl:w-20 2xl:h-20 2xl:mx-4 hover:text-sky-600"
                    >
                      <AiFillGithub />
                    </motion.div>
                  </a>
                </motion.div>
              </div>
              <div className="app-work-content flex items-center justify-center flex-col relative ">
                <h4 className="text-xl font-bold mt-4 ">{work.title}</h4>
                <p className=" mt-3 ">{work.description}</p>
                <div className="app__work_tag flex items-center justify-center absolute -top-6 bg-white rounded-t-lg px-1 pt-1">
                  <p className="">{work.tags[0]}</p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </>
  );
};

export default Work;
