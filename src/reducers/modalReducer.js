import { MODAL_ACTIONS } from "../static/constant";

const stackModalsInitialState = {
  modalStack: [],
};

export const StackModalReducer = (state = stackModalsInitialState, action) => {
  console.log(action , state, stackModalsInitialState ,"Reducers::::::::::::::")
  switch (action.type) {
    case MODAL_ACTIONS.PUSH_MODAL_STACK: {
      
      return { ...state , modalStack:[...state.modalStack , action.data] }
    }
    case MODAL_ACTIONS.POP_UP_MODAL_STACK: {
        const val = state.modalStack.slice(0,-1);
      return { ...state, modalStack: val }
    }
    case MODAL_ACTIONS.CLEAR_STACK_MODAL: {
      return { ...stackModalsInitialState }
    }
    default:
      return stackModalsInitialState;
  }
}
