import React, { useState } from 'react';
import { Dialog } from '@headlessui/react';
import { widgetPool } from '../data/widgetPool';
import { useDispatch } from 'react-redux';
import { addWidgetsToCategory } from '../features/dashboardSlice';

export default function AddWidgetModal({ open, onClose, categoryId }) {
  const dispatch = useDispatch();
  const tabs = Object.keys(widgetPool);
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const [checked, setChecked] = useState({}); // map id -> boolean
  const [widgetText, setWidgetText] = useState(""); // NEW: text input state

  React.useEffect(() => {
    if (!open) {
      setChecked({});
      setActiveTab(tabs[0]);
      setWidgetText(""); // reset text when modal closes
    }
  }, [open]);

  const toggle = (id) => {
    setChecked(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const confirm = () => {
    // gather checked widgets from the pool
    const widgetsToAdd = [];
    tabs.forEach(t => {
      widgetPool[t].forEach(w => {
        if (checked[w.id]) {
          // create widget object
          widgetsToAdd.push({
            id: w.id,
            title: w.title,
            type: w.type,
            subtitle: widgetText || "",   // 👈 save entered text here
            data: w.sampleData || {}
          });
        }
      });
    });
    if (widgetsToAdd.length > 0) {
      dispatch(addWidgetsToCategory({ categoryId, widgets: widgetsToAdd }));
    }
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose} className="h-overlay">
      <div className="h-panel" aria-hidden={false}>
        <div className="modal-header">
          <h3 style={{margin:0}}>Add Widget</h3>
          <button onClick={onClose} className="btn ghost">✕</button>
        </div>

        <div className="tabs">
          {tabs.map(t => (
            <button
              key={t}
              className={`tab-btn ${t === activeTab ? 'active':''}`}
              onClick={() => setActiveTab(t)}
            >
              {t}
            </button>
          ))}
        </div>

        <div style={{flex:1, overflow:'auto'}}>
          {widgetPool[activeTab].map(w => (
            <div className="widget-row" key={w.id}>
              <label>
                <input type="checkbox" checked={!!checked[w.id]} onChange={() => toggle(w.id)} />
                <div>
                  <div style={{fontWeight:600}}>{w.title}</div>
                  <div style={{fontSize:12, color:'#6b7280'}}>{w.type}</div>
                </div>
              </label>
            </div>
          ))}
        </div>

        {/* NEW: Input field for text */}
        <div style={{ margin: "12px 0" }}>
          <label style={{ display: "block", fontSize: 13, marginBottom: 4 }}>Widget Text</label>
          <input
            type="text"
            value={widgetText}
            onChange={(e) => setWidgetText(e.target.value)}
            placeholder="Enter widget description..."
            style={{ width: "100%", padding: "8px", borderRadius: "6px", border: "1px solid #ccc" }}
          />
        </div>

        <div className="modal-actions">
          <button className="btn ghost" onClick={onClose}>Cancel</button>
          <button className="btn primary" onClick={confirm}>Confirm</button>
        </div>
      </div>
    </Dialog>
  );
}
