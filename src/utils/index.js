
import { notification } from "antd";
export const showToasterMessage = (payload = {}) => {
    if(!payload.messageType){
      payload.messageType = 'error';
    }
   
  
    notification[payload.messageType || 'error'](
      {
        message:  (payload.messageType === "error" ? 'Error' : (payload.messageType === "success" ? 'Success': 'Warning'))+ " ! " +(payload.description || 'Error'),
        
      
        duration: 6,
        placement: 'bottom',
        className: payload.messageType +" "+ 'custom-notification'
      }
    )
  }

  export const sortTable = (table,col, order)=>{
    const tbody = table.tBodies[0];
  const rows = Array.from(tbody.rows);
  const direction = order ? -1 : 1;
        console.log(rows,col, "check the list")
        rows.sort((a, b) => {
            const aText = a.cells[col]?.textContent.trim();
            const bText = b.cells[col]?.textContent.trim();
            const aNum = parseFloat(aText);
            const bNum = parseFloat(bText);
        
            const isNumeric = !isNaN(aNum) && !isNaN(bNum);
        
            return direction * (isNumeric ? aNum - bNum : aText.localeCompare(bText, undefined, { numeric: true }));
          });
        
          rows.forEach(row => tbody.appendChild(row));
      
  }