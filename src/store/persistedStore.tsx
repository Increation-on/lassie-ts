import { configureStore } from "@reduxjs/toolkit";
import { productInfoReducer } from "./reducers/productInfoReducer";
import { catalogReducer } from './reducers/catalogReducer';
import { filterReducer } from './reducers/filterReducer';
import { sortReducer } from './reducers/sortReducer';
import { combineReducers } from "redux";
import {
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from "redux-persist";
import storage from 'redux-persist/lib/storage';

const reducers = combineReducers({
    productInfo: productInfoReducer,
    catalog: catalogReducer,
    filter: filterReducer,
    sort: sortReducer
});

const persistConfig = {
    key: 'root',
    storage
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
    reducer: persistedReducer,
    devTools: process.env.NODE_ENV !== 'production',
     middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;