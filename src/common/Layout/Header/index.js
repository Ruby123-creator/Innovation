import React from 'react'
import DrawerComponent from './Drawer'
import IconComponent from './Icon'


const HeaderComponnet = () => {
  return (
    <div className='top-bar'>
     <IconComponent/>
     <DrawerComponent/>
    </div>
  )
}

export default HeaderComponnet