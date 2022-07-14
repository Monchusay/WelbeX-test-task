import {combineReducers, configureStore} from "@reduxjs/toolkit";
import GoodsListSlice from "./Slices/GoodsListSlice";

const rootReducer = combineReducers({
    GoodsList: GoodsListSlice
})

const store = configureStore({
    reducer: rootReducer
})

export default store