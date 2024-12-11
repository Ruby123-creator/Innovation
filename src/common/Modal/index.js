import React, { Fragment, useState } from "react";
import { Button, Modal } from "antd";
import { MODAL_ACTIONS } from "../../static/constant";
import { useDispatch } from "react-redux";
import { BiMinus } from "react-icons/bi";
import { CustomButton } from "../General/CustomButtom";

export function StackModal(props) {
  const modalStack = props.modalStack || [];
  console.log(modalStack, "hewgdhasgdhasgdg");
  return (
    <Fragment>
      {modalStack.map((modalObj, i) => (
        <CustomModal key={i} {...modalObj} />
      ))}
    </Fragment>
  );
}
const CustomModal = (props) => {

  const cancelBtnProps = (props.footer || {}).cancel || {};
  const submitBtnProps = (props.footer || {}).submit || {};
  const {formData:dataValue} = props
  const [formData, updateFormData] = useState(props.formData)

  const bodyHtml = getBody(props, dataValue||formData, updateFormData);
  const dispatch = useDispatch();


  return (
    <>
      <Modal
        centered={false}
        closable={props.hideCloseIcon === true ? false : true}
        maskClosable={props.maskClosable === true ? false : true}
        width={props.width}
        closeIcon={props.closableIcon ? <BiMinus /> : null}
        keyboard={props.keyboard}
        wrapClassName={props.wrapClassName}
        title={props?.hideTitle ? '' : props?.title}
        open={true}
        onOk={() => dispatch({ type: MODAL_ACTIONS.POP_UP_MODAL_STACK })}
        onCancel={
          props.cancel
            ? props?.cancel
            : () => dispatch({ type: MODAL_ACTIONS.POP_UP_MODAL_STACK })
        }
        footer={
          props.hideFooter ? null : [
            <CustomButton
            btnName={'Cancel'}
            defaultMessage=''
            type={ 'default'}
            key={0}
            onClick={() => { 
              props.onCancel ? props.onCancel() : dispatch({ type: MODAL_ACTIONS.POP_UP_MODAL_STACK }) 
            }}
          />,
          <CustomButton
          btnName={'Submit'}
            defaultMessage=''
            htmlType='submit'
            key={1}
            onClick={() => {
              document.getElementsByClassName("add-new-input-text").length && document.getElementsByClassName("add-new-input-text")[0].classList.add("input-text-error")
              if (formData && Object.keys(formData).length) {
                props.handleSubmit(formData);
              } else {
                props.handleSubmit();
                dispatch({ type: MODAL_ACTIONS.POP_UP_MODAL_STACK });
              }
            }}
          />,
          ]
        }
      >
       {bodyHtml}
      </Modal>
    </>
  );
};



const getBody = (props , formData , updateFormData) =>{

   const {modalBody , modalData , handleSubmit}= props;

   let htmlBody = <Fragment/>;

   if(modalBody){
      htmlBody = modalBody;
   }
   else{
    htmlBody ='';
   }

   return htmlBody;
}