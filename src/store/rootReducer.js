import { combineReducers } from '@reduxjs/toolkit';
import userSlice from './userSlice';
import recipesSlice from './recipesSlice';
import servingsSlice from './servingsSlice';

export default combineReducers({
	user: userSlice,
	recipes: recipesSlice,
	servings: servingsSlice,
});;
