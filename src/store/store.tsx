import { configureStore } from "@reduxjs/toolkit";
import { productInfoReducer } from "./reducers/productInfoReducer";
import { catalogReducer } from './reducers/catalogReducer';
import { filterReducer } from './reducers/filterReducer';
import { sortReducer } from './reducers/sortReducer';


export const store = configureStore({
    reducer: {
        productInfo: productInfoReducer,
        catalog: catalogReducer,
        filter: filterReducer,
        sort: sortReducer
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;