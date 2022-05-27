
export interface ProductInfoState {
    products: any[];
    totalPrice: number;
    totalAmount: number;
    productInfo: any[];
    likes: number;
    location: { from: string, to: string };
}

export enum ProductInfoActionTypes {
    SUM_TOTAL_PRICE = "SUM_TOTAL_PRICE",
    SUM_TOTAL_AMOUNT = "SUM_TOTAL_AMOUNT",
    ADD_PRODUCT_INFO = "ADD_PRODUCT_INFO",
    GET_PRODUCTS = "GET_PRODUCTS",
    ADD_LOCATION = "ADD_LOCATION",
    SET_LIKES = "SET_LIKES",
    RESET_TOTAL_PRICE = "RESET_TOTAL_PRICE",
    RESET_TOTAL_AMOUNT = "RESET_TOTAL_AMOUNT",
    RESET_PRODUCT_INFO = "RESET_PRODUCT_INFO"
}

interface getProducsAction {
    type: ProductInfoActionTypes.GET_PRODUCTS;
    payload: any[];
}

interface sumTotalPriceAction {
    type: ProductInfoActionTypes.SUM_TOTAL_PRICE;
    payload: number;
}
interface SumTotalAmountAction {
    type: ProductInfoActionTypes.SUM_TOTAL_AMOUNT;
    payload: number;
}
interface addProductInfoAction {
    type: ProductInfoActionTypes.ADD_PRODUCT_INFO;
    payload: object;
}
interface addLocationAction {
    type: ProductInfoActionTypes.ADD_LOCATION;
    payload: { from: string, to: string };
}
interface setLikesAction {
    type: ProductInfoActionTypes.SET_LIKES;
    payload: number;
}

interface resetTotalPriceAction {
    type: ProductInfoActionTypes.RESET_TOTAL_PRICE;
}
interface resetTotalAmountAction {
    type: ProductInfoActionTypes.RESET_TOTAL_AMOUNT;
}
interface resetProductInfoAction {
    type: ProductInfoActionTypes.RESET_PRODUCT_INFO;
}

export type ProductInfoAction =
    getProducsAction | sumTotalPriceAction | SumTotalAmountAction |
    addProductInfoAction | addLocationAction | setLikesAction |
    resetTotalPriceAction | resetTotalAmountAction | resetProductInfoAction;
