import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    rate: 1,
    symbol:'$',
    code:'INR'
}

export const currencySlice = createSlice({
    name: 'currency',
    initialState,
    reducers: {

        setRate: (state, action) => {
            state.rate = action.payload.rate;
            state.symbol=action.payload.symbol
        }
    }
})
export const { setRate } = currencySlice.actions;
export default currencySlice.reducer;