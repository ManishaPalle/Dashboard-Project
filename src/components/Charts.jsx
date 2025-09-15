import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip } from 'recharts';

const COLORS = ['#00a3ff', '#ff7b7b', '#ffd166', '#4ade80'];

export function Donut({ data = { connected:2, notConnected:0 } }){
  const series = [
    { name: 'Connected', value: data.connected || 0 },
    { name: 'Not Connected', value: data.notConnected || 0 }
  ];
  return (
    <div style={{ width:'100%', height:70 }}>
      <ResponsiveContainer>
        <PieChart>
          <Pie data={series} innerRadius={18} outerRadius={30} dataKey="value">
            {series.map((_, i) => <Cell key={i} fill={COLORS[i % COLORS.length]} />)}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}

export function PieSimple({ data = [{ name:'A', value:70 }, {name:'B', value:30}] }){
  return (
    <div style={{ width:'100%', height:70 }}>
      <ResponsiveContainer>
        <PieChart>
          <Pie data={data} dataKey="value" outerRadius={30}>
            {data.map((_,i)=> <Cell key={i} fill={COLORS[i % COLORS.length]} />)}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}

export function BarSimple({ data = [{ name:'a', value:30 }, {name:'b', value:70}] }){
  return (
    <div style={{ width:'100%', height:70 }}>
      <ResponsiveContainer>
        <BarChart data={data}>
          <XAxis dataKey="name" hide />
          <YAxis hide />
          <Tooltip />
          <Bar dataKey="value" >
            {data.map((_, i) => <Cell key={i} fill={COLORS[i % COLORS.length]} />)}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
