import React from 'react';
import IconComponent from './Icon';
import DrawerComponent from '../../Drawer';

const HeaderComponnet = () => {
  return (
    <div className="top-bar">
      <IconComponent />
      <DrawerComponent placement="right" title="Title" >
        <p>Content of the drawer in the header</p>
      </DrawerComponent>
    </div>
  );
};

export default HeaderComponnet;
