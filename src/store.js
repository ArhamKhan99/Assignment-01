import { configureStore } from '@reduxjs/toolkit';
import recipeSlice from './slices/recipeSlice';

const store = configureStore({
  reducer: {
    recipe: recipeSlice,
  },
});

export default store;
