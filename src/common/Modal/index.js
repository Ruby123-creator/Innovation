import React, { Fragment, useState } from 'react';
import { Button, Modal } from 'antd';

export function StackModal(props) {
    const modalStack = props.modalStack || [];
  console.log(modalStack ,"hewgdhasgdhasgdg")
    return (
      <Fragment>
        {
          modalStack.map((modalObj, i) => <CustomModal key={i} {...modalObj} />)
        }
      </Fragment>
    );
  }
const CustomModal = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  console.log(props,"handy::")
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      
      <Modal title="Basic Modal" open={true} onOk={handleOk} onCancel={handleCancel}>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </>
  );
};
