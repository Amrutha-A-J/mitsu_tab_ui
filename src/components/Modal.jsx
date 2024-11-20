import React from "react";

const Modal = ({ content, onClose }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>
          X
        </button>
        <div className="modal-children">
          {content.map((child, index) => (
            <div key={index} className="modal-child-card">
              <span className="modal-child-name">{child.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Modal;
