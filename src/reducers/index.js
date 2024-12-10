import { commonReducer } from "./commonReducer";
import { combineReducers } from 'redux';
import { StackModalReducer } from "./modalReducer";

const reducers = combineReducers({
    common: commonReducer,
    stackModal: StackModalReducer,
})
export default reducers;