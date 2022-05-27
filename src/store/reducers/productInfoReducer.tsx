import { ProductInfoState, ProductInfoAction, ProductInfoActionTypes } from './../types/productInfo';

const initialState: ProductInfoState = {
    products: [],
    likes: 0,
    location: { from: "", to: "" },
    productInfo: [],
    totalAmount: 0,
    totalPrice: 0
}

export const productInfoReducer = (state = initialState, action: ProductInfoAction) => {
    switch (action.type) {
        case ProductInfoActionTypes.GET_PRODUCTS:
            return { ...state, products: [...action.payload] }
        case ProductInfoActionTypes.SUM_TOTAL_PRICE:
            return { ...state, totalPrice: state.totalPrice + action.payload }
        case ProductInfoActionTypes.SUM_TOTAL_AMOUNT:
            return { ...state, totalAmount: state.totalAmount + action.payload }
        case ProductInfoActionTypes.RESET_TOTAL_AMOUNT:
            return { ...state, totalAmount: 0 }
        case ProductInfoActionTypes.RESET_TOTAL_PRICE:
            return { ...state, totalPrice: 0 }
        case ProductInfoActionTypes.RESET_PRODUCT_INFO:
            return { ...state, productInfo: [] }
        case ProductInfoActionTypes.ADD_PRODUCT_INFO:
            return { ...state, productInfo: [...state.productInfo, action.payload] }
        case ProductInfoActionTypes.ADD_LOCATION:
            return { ...state, location: action.payload }
        case ProductInfoActionTypes.SET_LIKES:
            return { ...state, likes: state.likes + action.payload }
        default:
            return state
    }
}