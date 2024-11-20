import React from "react";

const TopDisplay = ({ childrenData, onChildClick }) => {
  return (
    <div className="top-display-content">
      {childrenData &&
        childrenData.map((child, index) => (
          <div
            key={index}
            className="child-card"
            onClick={() => onChildClick(child)}
          >
            <span className="child-name">{child.name}</span>
          </div>
        ))}
    </div>
  );
};

export default TopDisplay;
