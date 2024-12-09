import React from "react";
import "./index.scss";

const Cards = ({ title, number, icon, borderColor }) => {
  return (
    <div className="card" style={{ borderBottom: `4px solid ${borderColor}` }}>
      <div className="card-content">
        <div>
          <div className="card-title">{title}</div>
          <div className="card-number">{number}</div>
        </div>
        <div
          className="card-icon"
          style={{
            color: borderColor,
          }}
        >
          {icon}
        </div>
      </div>
    </div>
  );
};

export default Cards;
