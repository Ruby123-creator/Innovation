import { combineReducers } from "@reduxjs/toolkit"; // Use combineReducers from Redux Toolkit
import { commonReducer } from "./commonReducer";
import { StackModalReducer } from "./modalReducer";

const reducers = combineReducers({
  common: commonReducer,      // Register commonReducer under the key "common"
  stackModal: StackModalReducer, // Register StackModalReducer under the key "stackModal"
});

export default reducers;
