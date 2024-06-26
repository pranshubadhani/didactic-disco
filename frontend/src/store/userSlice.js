import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        setUserList: (state, action) => {
            return action.payload;
        },
    },
});

export const { setUserList } = userSlice.actions;

export default userSlice.reducer;
