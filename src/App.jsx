import React from 'react';
import { useSelector } from 'react-redux';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import Category from './components/Category';

export default function App(){
  const categories = useSelector(s => s.dashboard.categories);
  const query = useSelector(s => s.dashboard.searchQuery || '');

  // If search query, we can filter widgets across categories (simple behavior: show categories whose widgets match)
  const filteredCategories = categories.map(cat => {
    if (!query.trim()) return cat;
    const q = query.toLowerCase();
    const widgets = cat.widgets.filter(w => (w.title || '').toLowerCase().includes(q) || (w.subtitle||'').toLowerCase().includes(q));
    return { ...cat, widgets };
  }).filter(cat => cat.widgets.length > 0 || !query.trim());

  return (
    <div>
      <Header />
      <SearchBar />
      <div className="container">
        <div className="categories">
          {filteredCategories.map(cat => (
            <Category key={cat.id} category={cat} />
          ))}
        </div>
      </div>
    </div>
  );
}
