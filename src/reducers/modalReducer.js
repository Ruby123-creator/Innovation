import { MODAL_ACTIONS } from "../static/constant";

const stackModalsInitialState = {
  modalStack: [],
};

export const StackModalReducer = (state = stackModalsInitialState, action) => {
    console.log(action ,"Reducer")
  switch (action.type) {
    case MODAL_ACTIONS.PUSH_STACK_MODAL: {
      return {
        ...state, // Keep the current state
        modalStack: [...state.modalStack, action.data], // Create a new array with the new modal
      };
    }
    case MODAL_ACTIONS.POP_STACK_MODAL: {
      return {
        ...state,
        modalStack: state.modalStack.slice(0, -1), // Create a new array without the last element
      };
    }
    case MODAL_ACTIONS.CLEAR_STACK_MODAL: {
      return { ...stackModalsInitialState }; // Reset state to initial
    }
    default:
      return state; // Return unchanged state for unknown actions
  }
};
