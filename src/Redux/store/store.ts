import { configureStore, Action, getDefaultMiddleware } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { ThunkAction } from "@reduxjs/toolkit";
import logger from "redux-logger"
import rootReducer, { RootState } from "../index";

const middleware = [...getDefaultMiddleware(), logger];

const store = configureStore({
    reducer: rootReducer,
    middleware,
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export type AppThunk = ThunkAction<void, RootState, unknown, Action>;

export default store;