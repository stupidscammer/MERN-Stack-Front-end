import { configureStore } from '@reduxjs/toolkit';
import userSlice from './userSlice';
import recipesSlice from './recipesSlice';
import servingsSlice from './servingsSlice';
const middlewares = [];

if (process.env.NODE_ENV === 'development') {
	const { logger } = require(`redux-logger`);

	middlewares.push(logger);
}

const store = configureStore({
	reducer: {
		user: userSlice,
		recipes: recipesSlice,
		servings: servingsSlice
	},
	middleware: middlewares,
	devTools: process.env.NODE_ENV === 'development'
});

export default store;
