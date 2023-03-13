import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: {},
    isUpdate:false
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {

        setUser: (state, action) => {
            state.profile = action.payload.data
        },
        toggleUpdate: (state) => {
            state.isUpdate = !state.isUpdate
        }
    }
})
export const { setUser,toggleUpdate } = userSlice.actions;
export default userSlice.reducer;