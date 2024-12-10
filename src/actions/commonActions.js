import config from "../static/api-endpoints"
import { MODAL_ACTIONS } from "../static/constant"
import axios from "axios"
export const getUserLoginData =(payload)=>{
    return (dispatch)=>{

        return axios.post(`${config.API_BASE_URL}/${config.rootContext}/user/getLogedInUserInfo`,payload).
        then(res=>{
            console.log(res.data ,"wdshgadhsadghg")
        })
    }
}



export const pushModalToStack = (modalData) => {
    console.log("Action dispatched: pushModalToStack", modalData); // Check if action is dispatched
    return(dispatch=>{
        dispatch({
            type: MODAL_ACTIONS.PUSH_MODAL_STACK,
            data: modalData,
          })
    })
  };
  

export const popModalFromStack =()=>{
    return(dispatch=>{
        dispatch({type: MODAL_ACTIONS.POP_UP_MODAL_STACK})
    })
}