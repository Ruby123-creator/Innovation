import React from 'react';
import HeaderComponnet from './Header';
import Sidebar from './Sidebar';
import './index.scss';
const LayoutComponent = ({children}) => {
  return (
    <div className='main-Layout'>

      <div className='header'>
        <HeaderComponnet/>
      </div>
      <div className='main-Content'>
        <Sidebar/>
        {children}
      </div>
    </div>
  )
}

export default LayoutComponent