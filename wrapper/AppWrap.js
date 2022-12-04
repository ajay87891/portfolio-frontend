import React from 'react'
import {NavigationDots, SocialMedia} from '../components'

const AppWrap = (Component, idName, classNames) => function HOC() {
  return (
    <div id={idName} className={` ${classNames}`}>
      <SocialMedia/>
      <div className=' flex items-center justify-center'>
        <Component />
      
      </div>
      {/* <NavigationDots active={idName}/> */}
      
    </div>
  )
}

export default AppWrap
