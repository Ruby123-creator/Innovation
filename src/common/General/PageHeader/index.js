import React from 'react';
import { Popover } from 'antd';
import { BsListColumns } from "react-icons/bs";
import AddAndRemoveColumn from '../AddandRemoveColumn';
import "../general.scss"
const PageHeader = (props) => {
 
  const {title = '', count = 0, columns = false, showColPop, updateState, txColumns
  } = props;
  const handlePopoverClick = () => {
    updateState({ ...props,showColPop: !showColPop });
  };
  console.log(props,txColumns ,"HOME:::::::::::","rubyyy")
  return (
    <div className='page-header'>
      <div className='name'>
        {title} | {count}
      </div>

      {columns && (
        <div>
         <Popover
  content={<AddAndRemoveColumn {...props} />}
  title="Add/Remove"
  placement="left"
  open={showColPop}
  trigger="click"
  arrowPointAtCenter={true} // Ensure this prop is used correctly or omitted if unsupported
>
  <button onClick={handlePopoverClick}>
    <BsListColumns /> Columns
  </button>
</Popover>

        </div>
      )}
    </div>
  );
};

export default PageHeader;
