import React, { useState } from 'react';
import { Button, Drawer, Space } from 'antd';
import { BsThreeDotsVertical } from "react-icons/bs";

const DrawerComponent = ({ placement, title, children }) => {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <>
      <div className="drawer" onClick={showDrawer} style={{ cursor: "pointer" }}>
        <BsThreeDotsVertical size={24} />
      </div>
      <Drawer
        title={title}
        placement={placement}
        width={500}
        onClose={onClose}
        open={open}
        extra={
          <Space>
            <Button onClick={onClose}>Cancel</Button>
            <Button type="primary" onClick={onClose}>
              OK
            </Button>
          </Space>
        }
      >
        {children}
      </Drawer>
    </>
  );
};

export default DrawerComponent;
