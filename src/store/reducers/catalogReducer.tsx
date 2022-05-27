import { CatalogState, CatalogAction, CatalogActionTypes } from './../types/catalog';

const inititalState: CatalogState = {
    category: "",
    description: ""
}

export const catalogReducer = (state = inititalState, action: CatalogAction) => {
    switch (action.type) {
        case CatalogActionTypes.GET_CATALOG_NAME:
            return { ...state, category: action.payload }
        case CatalogActionTypes.GET_PRODUCT_DESCRIPTION:
            return { ...state, description: action.payload }
        default:
            return { ...state }
    }
}