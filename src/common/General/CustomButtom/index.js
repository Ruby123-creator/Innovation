import React from 'react';
import { Button } from 'antd';
import '../general.scss';
export function CustomButton(props) {
  return (
    <Button
      style={props.style}
      type={props.type || 'primary'}
      htmlType={props.htmlType}
      className={props.className}
      onClick={props.onClick}
      disabled={props.disabled}
      loading={props.loading}
    >
      {props.btnIcon ? props.btnIcon : ''}
      {props.btnName? props?.btnName:'Sumbit'}
      
    </Button>
  )
}