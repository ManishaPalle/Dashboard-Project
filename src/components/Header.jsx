import React from 'react';

export default function Header(){
  return (
    <div className="header">
      <div className="left">
        <div className="breadcrumbs">Home / Dashboard V2</div>
        <h1>CNAPP Dashboard</h1>
      </div>
      <div>
        {/* right side can have buttons if needed */}
      </div>
    </div>
  );
}
