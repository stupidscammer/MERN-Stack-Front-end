import { createSlice } from '@reduxjs/toolkit';

export const setUserData = user => async (dispatch, getState) => {
	dispatch(setUser(user));
};

const initialState = {
    username: '',
};

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		setUser: (state, action) => action.payload,
	},
	extraReducers: {}
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;
