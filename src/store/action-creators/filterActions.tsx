import axios from "axios";
import { Dispatch } from "redux";
import { FilterActionTypes, FilterAction } from "../types/filter";

export const fetchFilter = () => {
    return async (dispatch: Dispatch<FilterAction>) => {
        try {
            const response = await axios.get('/mocks/filterMenu.json');
            const data = response.data;
            dispatch({ type: FilterActionTypes.ADD_FILTER_ITEMS, payload: data })
        } catch (e) {
            console.log(e);
        }
    }
}

export const fetchFilteredProducts = () => {
    return async (dispatch: Dispatch<FilterAction>) => {
        try {
            const response = await axios.get('/mocks/filteredProducts.json');
            const data = response.data;
            dispatch({ type: FilterActionTypes.ADD_FILTERED_PRODUCTS, payload: data })
        } catch (e) {
            console.log(e)
        }
    }
}

export const displayFilteredProductsAction = (display: boolean) => {
    return {type: FilterActionTypes.DISPLAY_FILTERED_PRODUCTS, payload: display}
}
