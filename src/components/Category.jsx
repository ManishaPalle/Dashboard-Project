import React, { useState } from 'react';
import WidgetCard from './WidgetCard';
import AddWidgetModal from './AddWidgetModal';

export default function Category({ category }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="category">
      <div className="title-row">
        <div>
          <div style={{fontSize:12, color:'#6b7280'}}>{category.key}</div>
          <div style={{fontWeight:700}}>{category.name}</div>
        </div>
        <div>
          <button className="btn" onClick={() => setOpen(true)}>Add Widget</button>
        </div>
      </div>

      <div className="widgets">
        {category.widgets.map(w => (
          <WidgetCard widget={w} key={w.id} categoryId={category.id} />
        ))}
      </div>

      <AddWidgetModal open={open} onClose={() => setOpen(false)} categoryId={category.id} />
    </div>
  );
}
