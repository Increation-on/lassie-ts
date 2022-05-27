import axios from "axios";
import { Dispatch } from "redux";
import { ProductInfoActionTypes, ProductInfoAction } from "../types/productInfo";

export const fetchProducts = () => {
    return async (dispatch: Dispatch<ProductInfoAction>) => {
        try {
            const response = await axios.get('/mocks/products.json');
            const data = response.data;
            dispatch({ type: ProductInfoActionTypes.GET_PRODUCTS, payload: data });
        } catch (e) {
            console.log(e);
        }
    }
}

export const addLocationAction = (location: { from: string, to: string }): ProductInfoAction => {
    return { type: ProductInfoActionTypes.ADD_LOCATION, payload: location }
}

export const sumTotalAmountAction = (amount: number): ProductInfoAction => {
    return { type: ProductInfoActionTypes.SUM_TOTAL_AMOUNT, payload: amount }
}

export const sumTotalPriceAction = (price: number): ProductInfoAction => {
    return { type: ProductInfoActionTypes.SUM_TOTAL_PRICE, payload: price }
}

export const resetTotalPriceAction = (): ProductInfoAction => {
    return { type: ProductInfoActionTypes.RESET_TOTAL_PRICE }
}

export const resetTotalAmountAction = (): ProductInfoAction => {
    return { type: ProductInfoActionTypes.RESET_TOTAL_AMOUNT }
}

export const setLikesAction = (likes: number): ProductInfoAction => {
    return { type: ProductInfoActionTypes.SET_LIKES, payload: likes }
}

export const addProductInfoAction = (info: object): ProductInfoAction => {
    return { type: ProductInfoActionTypes.ADD_PRODUCT_INFO, payload: info }
}

export const resetProductInfoAction = (): ProductInfoAction => {
    return { type: ProductInfoActionTypes.RESET_PRODUCT_INFO }
}