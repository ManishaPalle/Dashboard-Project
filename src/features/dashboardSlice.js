import { createSlice } from '@reduxjs/toolkit';
import { initialData } from '../data/initialData';

const genId = (prefix='id') => `${prefix}-${Date.now()}-${Math.floor(Math.random()*1000)}`;

const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState: initialData,
  reducers: {
    addWidgetsToCategory: (state, action) => {
      // payload: { categoryId, widgets: [{id,title,type,data?}, ...] }
      const { categoryId, widgets } = action.payload;
      const cat = state.categories.find(c => c.id === categoryId);
      if (!cat) return;
      widgets.forEach(w => {
        // avoid duplicates by id
        const exists = cat.widgets.find(x => x.id === w.id);
        if (!exists) {
          cat.widgets.push({ ...w });
        }
      });
    },
    removeWidget: (state, action) => {
      const { categoryId, widgetId } = action.payload;
      const cat = state.categories.find(c => c.id === categoryId);
      if (!cat) return;
      cat.widgets = cat.widgets.filter(w => w.id !== widgetId);
    },
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    }
  }
});

export const { addWidgetsToCategory, removeWidget, setSearchQuery } = dashboardSlice.actions;
export default dashboardSlice.reducer;
