import axios from "axios"
import config from "../../../static/api-endpoints"
import { PRODUCT_DETAILS } from "../../../static/constant"
import { showToasterMessage } from "../../../utils"



export const fetchAllProducts = (payload)=>{

    return (dispatch=>{
        return axios.get(`${config.API_BASE_URL}/${config.rootContext}/inventoryItem/getAllInventoryItems?relationshipId=${payload.relationshipId}&warehouseMasterId=0&pageSize=${payload.pageSize || 10}&pageNumber=${(payload.pageNumber || 1) - 1}`).then(res=>{
            console.log(res,"Responsedata")

            dispatch({type:PRODUCT_DETAILS?.FETCH_ALL_PRODUCTS, data:{pageNo: payload?.pageNumber, list: res?.data}})
        }).catch((err)=>{
            console.log(err)
            showToasterMessage({messageType:'error',description:err||"Some error occured"});
        })
    })
}