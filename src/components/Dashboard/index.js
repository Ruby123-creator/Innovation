import React from 'react';
import { connect } from 'react-redux';
import { pushModalToStack } from '../../actions/commonActions'; // Action to push modal to stack

const DashBoardComponent = (props) => {
  const { modalStack, pushModalToStack } = props;

  const openDashboardModal = () => {
    // Check if the function is being called by logging here
    console.log("Opening dashboard modal...");
    pushModalToStack({
      title: "Ruby Pal",
      modalBody: 'Are you sure you want to save?',
    });
  };

  console.log(modalStack); // Log modalStack to verify the current state

  return (
    <div>
      <h1>Dashboard</h1>
      <button onClick={openDashboardModal}>Open Modal</button>
      <div>
        {modalStack.length > 0 ? (
          modalStack.map((modal, index) => (
            <div key={index}>
              <h2>{modal.title}</h2>
              <p>{modal.modalBody}</p>
            </div>
          ))
        ) : (
          <p>No modals in stack</p>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  modalStack: state.stackModal.modalStack,
});

const mapDispatchToProps = {
  pushModalToStack,
};

export default connect(mapStateToProps, mapDispatchToProps)(DashBoardComponent);
