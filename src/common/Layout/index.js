import React, { useState } from 'react';
import HeaderComponnet from './Header';
import Sidebar from './Sidebar';
import './index.scss';
import { Outlet } from 'react-router-dom';
const LayoutComponent = ({children}) => {
    const [state , updateState] = useState({})
  return (
    <div className='main-Layout'>

      <div className='header'>
        <HeaderComponnet/>
      </div>
      <div className='main-Content'>
        <Sidebar {...state} updateState={(e)=>updateState(e)}/>
        <main>
          {children}
        </main>
      </div>
    </div>
  )
}

export default LayoutComponent