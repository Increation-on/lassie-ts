import { FilterState, FilterActionTypes, FilterAction } from '../types/filter';


const initialState:FilterState = {
    filterItems: [],
    filterInfo:[],
    filteredProducts: [],
    displayFilteredProducts: false
}

export const filterReducer = (state=initialState, action:FilterAction) =>{
    switch(action.type){
        case FilterActionTypes.ADD_FILTER_ITEMS:
            return {...state, filterItems: [...action.payload] }
        case FilterActionTypes.ADD_FILTER_INFO:
            return {...state, filterInfo: [...state.filterInfo, action.payload]}
        case FilterActionTypes.ADD_FILTERED_PRODUCTS: 
            return {...state, filteredProducts: [...action.payload]}
        case FilterActionTypes.DISPLAY_FILTERED_PRODUCTS:
            return {...state, displayFilteredProducts: action.payload}               
        default:
            return state                
    }
}



