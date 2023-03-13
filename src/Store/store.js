import { combineReducers, configureStore } from "@reduxjs/toolkit";
import auth from "./Reducers/Authreducer/auth";
import user from "./Reducers/Userreducer/user";
import currency from "./Reducers/Currencyreducer/currency";

import {
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfigAuth = { key: "auth", storage, version: 1 };
const persistConfigCurrency = { key: "currency", storage, version: 1 };
const persistedReducerAuth = persistReducer(persistConfigAuth, auth);
const persistedReducerCurrency = persistReducer(persistConfigCurrency, currency);

const combineReducer = combineReducers({ auth: persistedReducerAuth, user,currency:persistedReducerCurrency })
const store = configureStore({
    reducer: combineReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
});
export default store;