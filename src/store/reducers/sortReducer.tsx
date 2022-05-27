import { SortState, SortAction, SortActionTypes } from './../types/sort';

const initialState:SortState = {
    productDisplayNum: 12,
    productSortCategory:"",
    sortedByPriceProducts: [],
    sortedByPopularProducts: [],
    sortedByNewProducts: [],
    sortedByAvailableProducts: [],
    unsortedProducts: [],
    sortedProducts: [],
}

export const sortReducer = (state = initialState, action:SortAction) => {
    switch (action.type) {
        case SortActionTypes.CHANGE_DISPLAY_NUM:
            return { ...state, productDisplayNum: action.payload }
        case SortActionTypes.SHOW_ALL_GOODS:
            return { ...state, productDisplayNum: action.payload }
        case SortActionTypes.SHOW_MORE_GOODS:
            return { ...state, productDisplayNum: action.payload }
        case SortActionTypes.CHANGE_SORT_CATEGORY:
            return {...state, productSortCategory: action.payload }
        case SortActionTypes.GET_SORT_BY_PRICE:
            return { ...state, sortedByPriceProducts: [...action.payload] }
        case SortActionTypes.GET_SORT_BY_POPULAR:
            return {...state, sortedByPopularProducts: [...action.payload] }
        case SortActionTypes.GET_SORT_BY_NEW:
            return {...state, sortedByNewProducts: [...action.payload] }
        case SortActionTypes.GET_SORT_BY_AVAILABLE:
            return {...state, sortedByAvailableProducts: [...action.payload] }
        case SortActionTypes.GET_PRODUCTS:
            return {...state, unsortedProducts: [...action.payload] }    
        case SortActionTypes.SORT_PRODUCTS: 
            switch(action.payload){    
                case "price":
                    return {...state, sortedProducts: [...state.sortedByPriceProducts] }
                case "popular":
                    return {...state, sortedProducts: [...state.sortedByPopularProducts] }
                case "new":
                    return {...state, sortedProducts: [...state.sortedByNewProducts] }
                case "available":
                    return {...state, sortedProducts: [...state.sortedByAvailableProducts] }
                default: 
                    return {...state, sortedProducts: [...state.unsortedProducts]}           
            }        
        default:
            return state
    }
    
}



