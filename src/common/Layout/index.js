import React, { useState } from 'react';
import HeaderComponnet from './Header';
import Sidebar from './Sidebar';
import './index.scss';
const LayoutComponent = ({children}) => {
    const [state , updateState] = useState({})
  return (
    <div className='main-Layout'>

      <div className='header'>
        <HeaderComponnet/>
      </div>
      <div className='main-Content'>
        <Sidebar {...state} updateState={(e)=>updateState(e)}/>
        {children}
      </div>
    </div>
  )
}

export default LayoutComponent