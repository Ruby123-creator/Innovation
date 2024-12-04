import React, { useState } from "react";
import { Button, Drawer, Radio, Space } from "antd";
import { BsThreeDotsVertical } from "react-icons/bs";

const DrawerComponent = () => {
  const [open, setOpen] = useState(false);
  const [placement] = useState("right");
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Space>
        <div className="drawer" onClick={showDrawer}>
          <BsThreeDotsVertical size={24}/>
        </div>
      </Space>
      <Drawer
        title="Drawer with extra actions"
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
        <p>Some contents...</p>
        
      </Drawer>
    </>
  );
};

export default DrawerComponent;
