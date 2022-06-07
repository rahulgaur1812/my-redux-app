import { ActionType } from "../contants/action-types"
export const setProducts = (products) => {
    return{
        type:ActionType.SET_PRODUCTS,
        payload:products
    }
}

export const selectedProduct = (product) =>{
    return {
        type:ActionType.SELECTED_PRODUCTS,
        payload:product

    }
}
export const removeSelectedProduct = (product) =>{
    return {
        type:ActionType.REMOVE_SELECTED_PRODUCTS

    }
}