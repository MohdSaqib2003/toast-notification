import React from "react";
import Toast from "./Toast";
import './ToastContainer.css';

const ToastContainer = ({ toasts, removeToast }) => {
  return (
    <div className={"toast-container"}>
      {toasts.map((toast) => {
        return (
          <Toast
            key={toast.id}
            type={toast.type}
            message={toast.message}
            duration={toast.duration}
            onClose={() => removeToast(toast.id)}
          />
        );
      })}
    </div>
  );
};

export default ToastContainer;
