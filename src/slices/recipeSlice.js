import { createSlice } from '@reduxjs/toolkit';

const recipeSlice = createSlice({
  name: 'recipe',
  initialState: {
    all: [],
    week1: [],
    week2: [],
    week3: [],
  },
  reducers: {
    addToAll: (state, action) => {
      state.all = action.payload;
    },

    addToWeek: (state, action) => {
      const { week, recipes } = action.payload;
      const data =
        state['all']?.filter(item => recipes?.includes(item.id));
      const tempData = state[week] || [];
      state[week] = [
        ...tempData,
        ...data.filter(
          item => !tempData.some(existingItem => existingItem.id === item.id)
        ),
      ];
    },

    removeFromWeek: (state, action) => {
      const { week, id } = action.payload;
      if (state[week]) {
        state[week] = state[week].filter(item => item.id !== id);
      }
    },
  },
});

export const { addToAll, addToWeek, removeFromWeek } = recipeSlice.actions;
export default recipeSlice.reducer;
