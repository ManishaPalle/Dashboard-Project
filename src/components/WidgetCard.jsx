import React from 'react';
import { useDispatch } from 'react-redux';
import { removeWidget } from '../features/dashboardSlice';
import { Donut, PieSimple, BarSimple } from './Charts';

export default function WidgetCard({ widget, categoryId }){
  const dispatch = useDispatch();

  const onRemove = () => {
    dispatch(removeWidget({ categoryId, widgetId: widget.id }));
  };

  const renderChart = () => {
    if (widget.type === 'donut') return <Donut data={widget.data} />;
    if (widget.type === 'pie') return <PieSimple data={widget.data?.series || [{name:'x', value:1}]} />;
    if (widget.type === 'bar') return <BarSimple data={widget.data?.series || [{name:'a', value:20}, {name:'b', value:60}]} />;
    return null;
  };

  return (
    <div className="widget">
      <button className="remove" onClick={onRemove} title="Remove">×</button>
      <h3>{widget.title}</h3>
      <p className="muted">{widget.subtitle || ''}</p>
      {renderChart()}
    </div>
  );
}
