import React from 'react';

const DashBoardComponent = (props) => {
  const {  pushModalToStack } = props;

  const openDashboardModal = () => {
    // Check if the function is being called by logging here
    console.log("Opening dashboard modal...");
    pushModalToStack({
      title: "Ruby Pal",
      modalBody: <div>
        Are you sure you want to save?
        <p onClick={()=>{
          pushModalToStack({
            title:"Simran Rawat",
            modal: "u can even 2 or more nested modals"
          })
        }}>Click to show nested Modal</p>
      </div>,
    });
  };

 

  return (
    <div>
      <h1>Dashboard</h1>
      <button onClick={openDashboardModal}>Open Modal</button>
     
    </div>
  );
};



export default DashBoardComponent;
