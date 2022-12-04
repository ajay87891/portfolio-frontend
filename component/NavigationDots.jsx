import React from 'react'

const NavigationDots = ({active}) => {
    const menuItems = ["home", "about", "work", "skills", "contact"]
  return (
    <div className='flex flex-col my-auto'>
        {menuItems.map(
          (item,index) => {
            return (
                <a className={`${(active === item)?"bg-gray-600":"bg-white"} rounded-full m-3 w-6 h-7 absolute`}
                href={`#${item}`} 
                key={item + index}


                />
             
            );
          }
        )}
        
      
    </div>
  )
}

export default NavigationDots
