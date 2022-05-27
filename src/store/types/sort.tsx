import { AnyAction } from 'redux';

export interface SortState {
    productDisplayNum: number;
    productSortCategory: string,
    sortedByPriceProducts: any[];
    sortedByPopularProducts: any[];
    sortedByNewProducts: any[];
    sortedByAvailableProducts: any[];
    unsortedProducts: any[];
    sortedProducts: any[];
}

export enum SortActionTypes {
    SHOW_ALL_GOODS = "SHOW_ALL_GOODS",
    CHANGE_DISPLAY_NUM = "CHANGE_DISPLAY_NUM",
    SHOW_MORE_GOODS = "SHOW_MORE_GOODS",
    CHANGE_SORT_CATEGORY = "CHANGE_SORT_CATEGORY",
    GET_PRODUCTS = "GET_PRODUCTS",
    SORT_PRODUCTS = "SORT_PRODUCTS",
    GET_SORT_BY_PRICE = "GET_SORT_BY_PRICE_PRODUCTS",
    GET_SORT_BY_POPULAR = "GET_SORT_BY_POPULAR",
    GET_SORT_BY_NEW = "GET_SORT_BY_NEW",
    GET_SORT_BY_AVAILABLE = "GET_SORT_BY_AVAILABLE",
}

interface showAllGoodsAction {
    type: SortActionTypes.SHOW_ALL_GOODS,
    payload: number;
}
interface showMoreGoodsAction {
    type: SortActionTypes.SHOW_MORE_GOODS,
    payload: number;
}

interface changeSortCategoryAction {
    type: SortActionTypes.CHANGE_SORT_CATEGORY,
    payload: string;
}

interface getSortByPriceProductsAction {
    type: SortActionTypes.GET_SORT_BY_PRICE,
    payload: any[];
}

interface getSortByPopularProductsAction {
    type: SortActionTypes.GET_SORT_BY_POPULAR,
    payload: any[];
}

interface getSortByNewProductsAction {
    type: SortActionTypes.GET_SORT_BY_NEW,
    payload: any[];
}

interface getSortByAvailableProductsAction {
    type: SortActionTypes.GET_SORT_BY_AVAILABLE,
    payload: any[];
}

interface sortProductsAction {
    type: SortActionTypes.SORT_PRODUCTS,
    payload: string;
}

interface getUnsortedProductsAction {
    type: SortActionTypes.GET_PRODUCTS,
    payload: any[];
}

interface changeDisplayNumAction {
    type: SortActionTypes.CHANGE_DISPLAY_NUM;
    payload: number | string;
}

export type SortAction =
    showAllGoodsAction | showMoreGoodsAction | changeSortCategoryAction |
    getSortByPriceProductsAction | getSortByPopularProductsAction | getSortByNewProductsAction |
    getSortByAvailableProductsAction | sortProductsAction | getUnsortedProductsAction | changeDisplayNumAction | AnyAction;