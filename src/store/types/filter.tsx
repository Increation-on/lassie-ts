import { AnyAction } from "redux";

export interface FilterState {
    filterItems: any[];
    filterInfo: any[];
    filteredProducts: any[];
    displayFilteredProducts: boolean;
}

export enum FilterActionTypes {
    ADD_FILTER_ITEMS = "ADD_FILTER_ITEMS",
    ADD_FILTER_INFO = "ADD_FILTER_INFO",
    ADD_FILTERED_PRODUCTS = "ADD_FILTERED_PRODUCTS",
    DISPLAY_FILTERED_PRODUCTS = "DISPLAY_FILTERED_PRODUCTS",
}

interface addFiltersAction {
    type: FilterActionTypes.ADD_FILTER_ITEMS;
    payload: any[];
}

interface addFilterInfoAction {
    type: FilterActionTypes.ADD_FILTER_INFO;
    payload: any[];
}

interface addFilteredProductsAction {
    type: FilterActionTypes.ADD_FILTERED_PRODUCTS,
    payload: any[];
}

interface displayFilteredProductsAction {
    type: FilterActionTypes.DISPLAY_FILTERED_PRODUCTS,
    payload: boolean;
}

export type FilterAction =
    addFiltersAction | addFilterInfoAction | addFilteredProductsAction |
    displayFilteredProductsAction | AnyAction