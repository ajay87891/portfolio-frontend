import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { urlFor, client } from "../constants/client";
import ReactTooltip from "react-tooltip";
import {MotionWrap} from "../wrapper";

const Skills = () => {
  const [experiences, setExperience] = useState([]);
  const [skills, setSkills] = useState([]);
  useEffect(() => {
    const query = '*[_type == "experiences"]';
    const skillsQuery = '*[_type == "skills"]';
    client.fetch(query).then((data) => setExperience(data));
    client.fetch(skillsQuery).then((data) => {setSkills(data)});
    console.log(skills);
  }, []);
  return (
    <>
      
      <div className="min-h-screen flex-1 w-full flex-col flex">
        <h1 className="text-center md:text-4xl lg:text-6xl text-2xl mt-24">
          Skills & Experience
        </h1>

        <div className="app__Skills-container  mt-12 w-full flex-col">
          <motion.div className="app__skills-list flex-1 flex flex-wrap justify-center items-start mx-10  md:mx-20  ">
            {skills.map((skill) => (
              <motion.div
                whileInView={{ opacity: [0, 1] }}
                transition={{ duration: 0.5 }}
                className="skills-item flex justify-center items-center flex-col m-4  text-center transition-all ease-linear duration-300 "
                key={skill.name}
              >
                <div
                  className="flex justify-center items-center flex-col w-20 h-20 rounded-full  hover:shadow-[0px_0px_20px] hover:shadow-white bg-slate-100"
                  // style={{ backgroundColor: skill.bgColor }}
                >
                  <img src={urlFor(skill.icon)} alt={skill.name} className="w-[50%] h-[50%]" />
                  </div>
                  <p className="text-center w-28 ">{skill.name}</p>
                
              </motion.div>
            ))}
          </motion.div>
          <motion.div
            className="app-skill-exp flex-1 flex justify-center items-center flex-col ml-[15vw] sm:ml-[20vw]  md:ml-[25vw]"

          >
            {experiences?.map((experience)=>(
              <motion.div
              className="app__skills-exp-item w-full flex flex-row justify-start items-start my-4"
              key={experience.year}
              >
                <div
                className="app__skills-exp-year mr-12">
                  <p className="text-xl font-extrabold text-sky-800">{experience.year}</p>
                </div>

                {
                  experience.works.map((work)=>(

                  

                
              <>
              <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app-skill-exp-work flex flex-col justify-start items-start mb-4 cursor-pointer "
              data-tip
              data-for={work.name}
              key={work.name}
              >
                <h4 className="text-2xl font-bold">{work.name}</h4>
                <p className=" font-semibold">{work.company}</p>

              </motion.div>
              <ReactTooltip
              id={work.time}
              effect="solid"
              arrowColor="#fff"
              className="skills-tooltip max-w-xs"


              >
                {work.description}
              </ReactTooltip>
              </>
              ))
            }

              </motion.div>
            ))}
            

          </motion.div>
        </div>
      </div>
    </>
  );
};

export default MotionWrap(Skills,'bg-white',"skills");
