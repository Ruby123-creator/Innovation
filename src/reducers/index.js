import { combineReducers } from "@reduxjs/toolkit"; // Use combineReducers from Redux Toolkit
import { commonReducer } from "./commonReducer";
import { StackModalReducer } from "./modalReducer";
import { ProductReducer } from "./productReducer";

const reducers = combineReducers({
  common: commonReducer,      // Register commonReducer under the key "common"
  stackModal: StackModalReducer, // Register StackModalReducer under the key "stackModal"
 product: ProductReducer,
});

export default reducers;
