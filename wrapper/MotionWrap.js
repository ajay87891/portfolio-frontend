import React from 'react'
import {motion} from "framer-motion"

const MotionWrap = (Components, classNames, id) => function HOC() {
  return (
    <>
    <a id={`${id}`} />
    <motion.div
    whileInView={{y:[100, 50, 0], opacity:[0,0,1]}}
    transition={{duration:0.5}}
    className={`${classNames} flex items-center justify-center`}
    >
        <Components/>
      
    </motion.div>
    </>
  )
}

export default MotionWrap
