import React, { useEffect, useState } from "react";
import Toast from "./Toast";
import "./ToastContainer.css";

const ToastContainer = ({ toasts, removeToast }) => {
  const [toastData, setToastData] = useState({
    "top-left": [],
    "top-right": [],
    "bottom-left": [],
    "bottom-right": [],
  });

  useEffect(() => {
    const temp = {
      "top-left": [],
      "top-right": [],
      "bottom-left": [],
      "bottom-right": [],
    };
    for (let ele of toasts) {
      temp[ele.position].push(ele);
    }
    setToastData(temp);
  }, [toasts]);

  return (
    <>
      {Object.keys(toastData).map((position, ind) => (
        <div className={`toast-container ${position}`} key={ind}>
          {toastData[position].map((toast) => {
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
      ))}
    </>
  );
};

export default ToastContainer;
