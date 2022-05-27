import { AnyAction } from 'redux';

export interface CatalogState {
    category: string;
    description: string;
}

export enum CatalogActionTypes {
    GET_CATALOG_NAME = "GET_CATALOG_NAME",
    GET_PRODUCT_DESCRIPTION = "GET_PRODUCT_DESCRIPTION",
}

interface getCatalogName {
    type: CatalogActionTypes.GET_CATALOG_NAME;
    payload: string;
}

interface getProductDescription {
    type: CatalogActionTypes.GET_PRODUCT_DESCRIPTION;
    payload: string;
}

export type CatalogAction = getCatalogName | getProductDescription | AnyAction;