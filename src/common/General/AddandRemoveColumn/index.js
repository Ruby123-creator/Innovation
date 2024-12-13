import { Checkbox } from 'antd';
import React from 'react';

const AddAndRemoveColumn = (props) => {
  const {txColumns = [], updateState } = props;
  const handleCheckboxChange = (e) => {
    const updatedColumns = txColumns.map((col) => 
      col.item === e.target.value
        ? { ...col, check: !col.check }  // Toggle the 'check' value for the matching column
        : col
    );

    // Update the state with the modified columns array
    updateState({...props, txColumns: updatedColumns });
  };

  return (
    <div>
      {txColumns.map((val, i) => (
        <div key={"columns" + i}>
          <Checkbox
            value={val.item}
            disabled={val.isMandatory}
            checked={val.check}
            onChange={handleCheckboxChange}
          >
            {val.item}
          </Checkbox>
        </div>
      ))}
    </div>
  );
};

export default AddAndRemoveColumn;
