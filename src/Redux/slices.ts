import {createSlice, PayloadAction } from '@reduxjs/toolkit'
import { type } from 'os';
import { RootState } from '.';
import { SellerListType } from '../types/types';

type SellerState = {
    sellerList: SellerListType[] | undefined
}

const initialState: SellerState = {
    sellerList: undefined
}

export const SellerSlice = createSlice({
    name: 'sellers',
    initialState,
    reducers: {
        setSellerList: (state, { payload }: PayloadAction<SellerListType[] | undefined>) => {
            state.sellerList = payload;
        }
    }
})

export const {
    setSellerList
} = SellerSlice.actions;

export const SellerSelector = (state: RootState) => state.seller
export default SellerSlice.reducer;