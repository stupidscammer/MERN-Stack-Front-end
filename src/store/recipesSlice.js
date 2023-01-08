import { createSlice } from '@reduxjs/toolkit';

export const setRecipesData = recipe => async (dispatch, getState) => {
	dispatch(setRecipes(recipe));
};

const initialState = {
    resultlist: '',
};
const recipesSlice = createSlice({
	name: 'recipes',
	initialState,
	reducers: {
		setRecipes: (state, action) => action.payload,
	},
	extraReducers: {}
});

export const { setRecipes } = recipesSlice.actions;

export default recipesSlice.reducer;
