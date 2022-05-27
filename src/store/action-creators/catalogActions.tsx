import { CatalogAction, CatalogActionTypes } from "../types/catalog"

export const getCatalogNameAction = (name: string): CatalogAction => {
    return {type: CatalogActionTypes.GET_CATALOG_NAME, payload: name}
}

export const getProductDescriptionAction = (description: string): CatalogAction => {
    return {type: CatalogActionTypes.GET_PRODUCT_DESCRIPTION, payload: description}
}