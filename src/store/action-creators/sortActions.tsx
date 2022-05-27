import axios from "axios";
import { Dispatch } from "redux";
import { SortAction, SortActionTypes } from "../types/sort";

export const fetchSortedByPriceProductsAction = () => {
    return async (dispatch: Dispatch<SortAction>) => {
        try {
            const response = await axios.get('/mocks/productsSortedByPrice.json');
            const data = response.data;
            dispatch({ type: SortActionTypes.GET_SORT_BY_PRICE, payload: data })
        } catch (e) {
            console.log(e)
        }
    }
}


export const fetchSortedByPopularProductsAction = () => {
    return async (dispatch: Dispatch<SortAction>) => {
        try {
            const response = await axios.get('/mocks/productSortedByPopular.json');
            const data = response.data;
            dispatch({ type: SortActionTypes.GET_SORT_BY_POPULAR, payload: data })
        } catch (e) {
            console.log(e)
        }
    }
}


export const fetchSortedByNewProductsAction = () => {
    return async (dispatch: Dispatch<SortAction>) => {
        try {
            const response = await axios.get('/mocks/productsSortedByNew.json');
            const data = response.data;
            dispatch({ type: SortActionTypes.GET_SORT_BY_NEW, payload: data })
        } catch (e) {
            console.log(e)
        }
    }
}

export const fetchSortedByAvailableProductsAction = () => {
    return async (dispatch: Dispatch<SortAction>) => {
        try {
            const response = await axios.get('/mocks/productsSortedByAvailable.json');
            const data = response.data;
            dispatch({ type: SortActionTypes.GET_SORT_BY_AVAILABLE, payload: data })
        } catch (e) {
            console.log(e)
        }
    }
}

export const fetchUnsortedProductsAction = () => {
    return async (dispatch: Dispatch<SortAction>) => {
        try {
            const response = await axios.get('/mocks/products.json');
            const data = response.data;
            dispatch({ type: SortActionTypes.GET_PRODUCTS, payload: data })
        } catch (e) {
            console.log(e)
        }
    }
}

export const changeSortCategoryAction = (category:string) => {
    return {type:SortActionTypes.CHANGE_SORT_CATEGORY, payload: category}
}

export const changeDisplayNumAction = (num: string | number) => {
    return {type: SortActionTypes.CHANGE_DISPLAY_NUM, payload: num}
}

export const sortProductsAction = (category: string) => {
    return {type: SortActionTypes.SORT_PRODUCTS  , payload: category }
}

export const showMoreGoodsAction = (num:number) => {
    return {type: SortActionTypes.SHOW_MORE_GOODS, payload: num}
}

export const showAllGoodsAction = (num:number) => {
    return {type: SortActionTypes.SHOW_ALL_GOODS, payload: num}
}
