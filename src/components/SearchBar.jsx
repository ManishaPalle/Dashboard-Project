import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchQuery } from '../features/dashboardSlice';

export default function SearchBar(){
  const dispatch = useDispatch();
  const search = useSelector(s => s.dashboard.searchQuery || '');
  return (
    <div className="controls">
      <div className="search">
        <input
          placeholder="Search anything..."
          value={search}
          onChange={e => dispatch(setSearchQuery(e.target.value))}
        />
      </div>
      <div>
        {/* optional top-right controls */}
      </div>
    </div>
  );
}
