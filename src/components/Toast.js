import React, { useEffect } from "react";
import "./Toast.css";

const Toast = ({ type, message, duration, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(onClose, duration);
    return () => clearTimeout(timer);
  }, [onClose, duration]);

  return (
    <div className={`toast ${type}`}>
      <span>{message}</span>
      <span onClick={onClose} className="close-btn">
        x
      </span>
    </div>
  );
};

export default Toast;
