import { createSlice } from '@reduxjs/toolkit';

export const setRecipesData = slist => async (dispatch, getState) => {
	dispatch(shopList(slist));
};

const initialState = {
    slist: '',
};

const shopSlice = createSlice({
	name: 'addShopList',
	initialState,
	reducers: {
		setRecipes: (state, action) => action.payload,
	},
	extraReducers: {}
});

export const { shopList } = shopSlice.actions;

export default shopSlice.reducer;
