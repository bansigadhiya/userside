import api from '../../axios/api'
import { GET_PRODUCT } from '../Constant/Action.type'

export const getProduct = (data) => {
    return{
        type : GET_PRODUCT,
        payload : data
    }
}

export const getProductAsync = () => {

    return async dispatch => {
        await api.get("/products").then((res) => {
            dispatch(getProduct(res.data))
        }).catch((err) => {
            console.log(err,"err");
        })
    }
}